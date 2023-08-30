import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import router from "./Route/Userroutes.js";


const app=express();
dotenv.config();
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use('/swiggy',router);
mongoose.connect(process.env.MONGO)
.then(()=>console.log("db connected"))
.catch((err)=>console.log("error",err));

app.listen(process.env.PORT,()=>console.log(`working on  ${process.env.PORT}`))

