import mongoose from "mongoose";
import express from 'express';

import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

const app = express()


connectDB()

/*c
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on('error', (error) => {
            console.log("error", error)
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`Application is listening on ${process.env.PORT}`);
        })

        
    } catch (error) {
        console.error('Errro', error);
        throw error;
    }
})()
*/