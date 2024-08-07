const express = require('express');
require('dotenv').config();
const authRoutes = require('./routes/auth.routes');
const connectDB = require('./db/connectToMongo');
const app = express();

app.get("/",(req,res)=>{
    res.send("yo!")
})

app.use(express.json());

app.use("/api/auth", authRoutes)

const start = ()=>{
    try {
        app.listen(process.env.PORT, ()=>{
            connectDB();
            console.log("server running on port",process.env.PORT);
        });        
    } catch (error) {
        console.log(error);
    }
}
start();