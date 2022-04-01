
const express = require("express");
const router = express.Router();
const { Pages } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");
const { sign } = require("jsonwebtoken");

 
router.post("/",async(req,res)=>{


    const {name, url, status, position}=req.body;

    

   
    const pages= await Pages.create({
        name: name,
        url: url,
        status: status,
        position: position,
       
      });
     
      res.json(pages);
      

      console.log(pages);
  
});

router.get("/getPages",async(req,res)=>{
  const pagesList= await Pages.findAll();

 // const likedPosts = await Likes.findAll({where: {UserId:req.user.id }});

 //  res.json({listOfPosts:listOfPosts,likedPosts:likedPosts});
  res.json(pagesList);
});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const page = await Pages.findByPk(id);
  res.json(page);
});


module.exports=router;