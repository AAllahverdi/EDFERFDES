const {Single}=require("../Models/single.model")

const SingleController={
    getAll:async(req,res)=>{
        try{
            const target=await Single.find({})
            res.send(target)

        }catch(error){
            res.send("item isn ot found")
        }
    },
    getById:async(req,res)=>{
        try{
            const {id}=req.params
            const single=await Single.findById(id)
            res.send(single)

        }catch(error){
            res.send("item isn ot found")
        }
    },
    Post:async(req,res)=>{
        try{
            const {name,price,image,desc}=req.body
            const newProduct=new Single({name,price,image,desc})
            await newProduct.save()
            res.send(newProduct)
        }catch(error){
            res.send("item isn ot found")
        }
    },
    delete:async(req,res)=>{
        try{
            const {id}=req.params
            await Single.findByIdAndDelete(id)
            res.send("deleted")
        }catch(error){
            res.send("item isn ot found")
        }
    },
}
module.exports={SingleController}