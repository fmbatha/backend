const express = require("express");
const router = express.Router();
const { Payouts,Bookings,Properties,Users,PropertyAddress,PropertyPrice,Payments} = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");
const { sign } = require("jsonwebtoken");





router.get("/getpayouts",async(req,res)=>{
    const payout= await Payouts.findAll({include:[Bookings,Properties,Users]});
  
    
    //const usersList = await Users.findAll();
  
     console.log(payout)
  
    res.json(payout);
    // res.json(bookingList);
  });

module.exports=router;