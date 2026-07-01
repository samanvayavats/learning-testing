import mongoose from "mongoose";

export const connectDataBase = async () => {
    try {
        const res = await mongoose.connect('mongodb://localhost:27017/testing')
        console.log('the database connect ')
    } catch (error) {
        console.log('db connection failed ' , error)
    }
}