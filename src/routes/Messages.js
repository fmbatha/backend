const express = require("express");
const router = express.Router();
const { Messages } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");
const { sign } = require("jsonwebtoken");





router.post("/",async(req,res)=>{




    const {subject, message, sender_id,receiver_id}=req.body;

    var status="Available";

    var type="Common Amenities";

   
    const messages= await Messages.create({
        subject:subject,
        message:message,
        sender_id:sender_id,
        receiver_id:receiver_id,
       
      });
     
      res.json(messages);
      

      console.log(messages);
  
});

router.get("/getMessages",async(req,res)=>{
  const messageList= await Messages.findAll();

 // const likedPosts = await Likes.findAll({where: {UserId:req.user.id }});

 //  res.json({listOfPosts:listOfPosts,likedPosts:likedPosts});
  res.json(messageList);
});


module.exports=router;