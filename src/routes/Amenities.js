const express = require("express");
const router = express.Router();
const { Amenities } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");
const { sign } = require("jsonwebtoken");




router.post("/",async(req,res)=>{


    const {title, description, symbol, icons}=req.body;

    var status="Available";

    var type="Common Amenities";

   
    const amenity= await Amenities.create({
        title:title,
        description:description,
        symbol:symbol,
        type:type,
        icons:icons,

        status:status,
       
      });
     
      res.json(amenity);
      

      console.log(amenity);
  
});

router.get("/getAmenities",async(req,res)=>{
  const amenityList= await Amenities.findAll();

 // const likedPosts = await Likes.findAll({where: {UserId:req.user.id }});

 //  res.json({listOfPosts:listOfPosts,likedPosts:likedPosts});
  res.json(amenityList);
});


module.exports=router;