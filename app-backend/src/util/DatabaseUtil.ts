import mongoose from 'mongoose'
import dotenv from 'dotenv/config'

export function ConnectDB() {
    if (!process.env.MONGO_LOCAL) return;

    mongoose.connect(process.env.MONGO_LOCAL).then((value) => {
        console.log("Database Connected");
    }).catch((error) => {
        console.error("[ERROR] Connection failed");
        console.log(error);
    });
}