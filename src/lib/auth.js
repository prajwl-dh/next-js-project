import NextAuth from "next-auth";
import GitHub from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import { connectionToDb } from "./utils";
import { User } from "./models";
import bcrypt from 'bcrypt'
import { authConfig } from "./auth.config";

const login = async (credentials) => {
    try{
        connectionToDb()
        const user = await User.findOne({ username: credentials.username})
        if(!user){
            throw new Error("Wrong credentials")
        }

        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)
        if(!isPasswordCorrect){
            throw new Error("Wrong credentials")
        }

        return user
    }catch(err){
        throw new Error("Failed to login")
    }
}

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({ 
    ...authConfig,
    providers: [ 
        GitHub({ 
            clientId:process.env.GITHUB_ID, 
            clientSecret:process.env.GITHUB_SECRET,
        }),
        CredentialsProvider({
            async authorize(credentials) {
                try{
                    const user = await login(credentials)
                    return user
                }catch(err){
                    return null
                }
            }
        })
    ],
    callbacks: {
        async signIn({ user, account, profile }){
            if(account.provider === "github"){
                connectionToDb()
                try{
                    const user = await User.findOne({ email: profile.email})
                    if(!user){
                        const newUser = new User({
                            username: profile.name,
                            email: profile.email,
                            img: profile.image
                        })
                        await newUser.save()
                    }

                }catch(err){
                    return false
                }
            }
            return true
        },
        ...authConfig.callbacks,
    }
})

