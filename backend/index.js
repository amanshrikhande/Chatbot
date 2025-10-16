import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import chatbotRoutes from './routes/chatbot.route.js';
import cors from 'cors'

const app = express()
dotenv.config();

const port = process.env.PORT || 3000

//Middleware
app.use(express.json());
app.use(cors())

//Connecting Database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB")
    }).catch((error) => {
        console.log("Error connecting in mongoDB: ", error)
    })


//Defining Routes
app.use("/bot/v1/", chatbotRoutes)

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})
