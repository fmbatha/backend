
const express = require("express");
const router = express.Router();
const { CleaningTasks } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");
const { sign } = require("jsonwebtoken");

 
router.post("/",async(req,res)=>{


    const {user_id, property_id, amount,date, notes}=req.body;

    

   
    const cleaning_lady= await CleaningTasks.create({
        user_id: user_id,
        property_id: property_id,
        amount: amount,
        date: date,
        notes:notes,
       
      });
     
      res.json(cleaning_lady);
      

      console.log(cleaning_lady);
  
});

router.get("/allcleaners",async(req,res)=>{
  const tasksList= await CleaningTasks.findAll();

 // const likedPosts = await Likes.findAll({where: {UserId:req.user.id }});

 //  res.json({listOfPosts:listOfPosts,likedPosts:likedPosts});
  res.json(tasksList);
});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const page = await Pages.findByPk(id);
  res.json(page);
});


module.exports=router;