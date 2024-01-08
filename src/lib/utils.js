import mongoose from 'mongoose'

const connection = {}

export const connectionToDb = async () => {
    try {
        if(connection.isConnected){
            console.log("Using an existing connection")
            return
        }
        const db = await mongoose.connect('mongodb://localhost:27017/next-js-project')
        connection.isConnected = db.connections[0].readyState
    }
    catch(error){
        console.log(error)
        throw new Error(error)
    }
}