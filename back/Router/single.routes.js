const express=require("express")
const router=express.Router()
const {SingleController}=require("../Controller/single.controller")
router.get("/",SingleController.getAll)
router.get("/:id",SingleController.getById)
router.post("/",SingleController.Post)
router.delete("/",SingleController.delete)

module.exports=router