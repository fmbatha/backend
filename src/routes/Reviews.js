const express = require("express");
const router = express.Router();
const { Reviews,Users } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");
const { sign } = require("jsonwebtoken");





router.post("/",async(req,res)=>{




    const {message, sender_id,reviewer,comments,improve_message,receiver_id}=req.body;

    var status="Available";

    var type="Common Amenities";

   
    const review= await Reviews.create({
        sender_id: sender_id,
        receiver_id: receiver_id,
        reviewer: reviewer,
        message: message,
        comments: comments,
        improve_message: improve_message,
       
      });
     
      res.json(review);
      

      console.log(review);
  
});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const review = await Reviews.findByPk(id);
  res.json(review);
});

router.get("/getReviews",async(req,res)=>{
  const reviewsList= await Reviews.findAll();

 // const likedPosts = await Likes.findAll({where: {UserId:req.user.id }});

 //  res.json({listOfPosts:listOfPosts,likedPosts:likedPosts});
  res.json(reviewsList);
});

router.get("/myreviews", validateToken, async (req, res) => {
    const reviewsList = await Users.findOne({ where: { id: req.user.id },include: [Reviews] });
  
    const myReviews = await Reviews.findAll({
      where: { sender_id: req.user.id }
    });
    res.json({reviewsList:reviewsList,myReviews:myReviews});
  });


  
router.put("/updatereview/:id", async (req, res) => {
  const id = req.params.id;

  const message = req.body.message;



  const review = await Reviews.update({message},{ where: { id: id }});

  res.json(review);
  console.log(review);
});


module.exports=router;