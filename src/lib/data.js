import { Post, User } from "./models"
import { connectionToDb } from "./utils"
import { unstable_noStore as noStore } from "next/cache";

export const getSinglePost = async (id) => {
    noStore()
    try {
        connectionToDb();
        const post = await Post.findOne({ slug: id });
        if (post) {
            const plainTextPost = post.toObject();
            plainTextPost._id = plainTextPost._id.toString();  // Convert ObjectId to string
            return plainTextPost;
        }
    } catch(err) {
        throw new Error("Failed to fetch post!");
    }
}

export const getPosts = async () => {
    noStore()
    try {
        connectionToDb();
        const posts = await Post.find({});
        return posts.map(post => {
            const plainPost = post.toObject();
            plainPost._id = plainPost._id.toString();  // Convert ObjectId to string
            return plainPost;
        });
    } catch(err) {
        throw new Error("Failed to fetch posts!");
    }
}

export const getUser = async (id) => {
    noStore()
    try {
        connectionToDb();
        const user = await User.findOne({ _id: id });
        if (user) {
            const plainTextUser = user.toObject();
            plainTextUser._id = plainTextUser._id.toString();  // Convert ObjectId to string
            return plainTextUser;
        }
    } catch(err) {
        throw new Error("Failed to fetch user!");
    }
}

export const getUsers = async () => {
    noStore()
    try {
        connectionToDb();
        const users = await User.find({});
        return users.map(user => {
            const plainUser = user.toObject();
            plainUser._id = plainUser._id.toString();  // Convert ObjectId to string
            return plainUser;
        });
    } catch(err) {
        throw new Error("Failed to fetch users!");
    }
}

export const getTimeStamp = async (id) => {
    noStore()
    try {
        connectionToDb();
        const post = await Post.findOne({ slug: id });
        if (post) {
            const postTimestamp = post._id.getTimestamp();
            return postTimestamp; // This is already a plain object (JavaScript Date)
        }
    } catch(err) {
        throw new Error("Failed to fetch timestamp!");
    }
}