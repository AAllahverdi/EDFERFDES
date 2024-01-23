const mongoose=require("mongoose")
const Single=mongoose.model("single",new mongoose.Schema({
    name:String,
    price:Number,
    image:String,
    desc:String
}))
module.exports={Single}