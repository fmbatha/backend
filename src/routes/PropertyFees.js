const express = require("express");
const router = express.Router();
const { PropertyFees } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");
const { sign } = require("jsonwebtoken");




router.post("/",async(req,res)=>{


  


    const {PropertyId, cleaning_fee, guest_after, guest_fee, security_fee, price,weekend_price,weekly_discount,monthly_discount,currency_code}=req.body;

   
    PropertyFees.create({
        property_id:PropertyId,
        cleaning_fee:cleaning_fee,
        guest_after:guest_after,
        guest_fee:guest_fee,
        security_fee:security_fee,
        price:price,


        weekend_price:weekend_price,
        weekly_discount:weekly_discount,
        monthly_discount:monthly_discount,
        currency_code:currency_code,
       
      });
      res.json("Success");
  
});


module.exports=router;