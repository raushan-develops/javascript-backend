import express, { urlencoded } from 'express'
import cors from 'cors'
import cookiesParser from 'cookies-parser'
const app = express()

app.use(cors({
    origin: process.env.ORIGIN,
    credentials: true
}));

app.use(express.json({limit: "16kb"}))
app.use(urlencoded({
    extended: true,
    limit: "16kb"
}))
app.use(express.static("public"))

app.use(cookiesParser())


export {app}