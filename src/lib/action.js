"use server"

import { Post, User } from "./models";
import { connectionToDb } from "./utils";
import { revalidatePath } from "next/cache";
import { signIn, signOut } from "@/lib/auth"
import bcrypt from "bcrypt"

export const addPost = async (prevState,formData) => {
    const { title, desc, slug, userId } = Object.fromEntries(formData);

    try {
        connectionToDb();
        const newPost = new Post({
        title,
        desc,
        slug,
        userId,
        });

        await newPost.save();
        console.log("saved to db");
        revalidatePath("/blog");
        revalidatePath("/admin");
    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
};

export const deletePost = async (formData) => {
    const { id } = Object.fromEntries(formData);
  
    try {
      connectionToDb();
  
      await Post.findByIdAndDelete(id);
      console.log("deleted from db");
      revalidatePath("/blog");
        revalidatePath("/admin");
    } catch (err) {
      console.log(err);
      return { error: "Something went wrong!" };
    }
};

export const handleGithubLogin = async () => {
    await signIn("github")
}

export const handleLogOut = async () => {
    await signOut("github")
}

export const register = async (previousState, formData) => {
    const { username, email, password, passwordRepeat } = Object.fromEntries(formData)
    if(password !== passwordRepeat){
        return { error: "Passwords do not match" }
    }
    else{
        try{
            connectionToDb()

            const user = await User.findOne({ username })
            if(user){
                return { error: "Username already exists" };
            }

            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)

            const newUser = new User({
                username, 
                email,
                password: hashedPassword,
            })
            await newUser.save()
            console.log("Saved to db")
            return {success: true}
        }catch(err){
            return {error: "Something went wrong"}
        }
    }
}

export const login = async (prevState, formData) => {
    const { username, password } = Object.fromEntries(formData)

    try{
        await signIn("credentials", {username, password})
    }catch(err){
        if(err.message.includes("CredentialsSignin")){
            return {error: "Invalid username or password"}
        }
        return {error: "Invalid username or password"}
    }
}

