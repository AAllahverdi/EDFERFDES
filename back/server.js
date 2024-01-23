const express=require("express")
const app=express()
const SingleRoputer=require("./Router/single.routes")
const cors=require("cors")
const mongoose=require("mongoose")
app.use(cors())
require('dotenv').config()
const PORT=process.env.PORT || 6363
app.use(express.json())

mongoose.connect("mongodb+srv://tu7ljr8ww:Allahverdi123@cluster0.hlwgpfm.mongodb.net/").then(res=>{
    console.log("connected to mongodb")
})
app.use("/single",SingleRoputer)
app.listen(PORT,()=>{
    console.log("back is running 6363")
})