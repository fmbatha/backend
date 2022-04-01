const express = require("express");
const router = express.Router();
const { PropertyPrice } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");
const { sign } = require("jsonwebtoken");




router.post("/",async(req,res)=>{


    const {PropertyId, cleaning_fee, guest_after, guest_fee,security_fee, 
        price, weekend_price,weekly_discount,monthly_discount,currency_code}=req.body;

   
    const property_price= await PropertyPrice.create({
        PropertyId:PropertyId,
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
     
      res.json(property_price);
      

      console.log(property_price);
  
});


router.get("/byPropertyId/:PropertyId", async (req, res) => {
    const id = req.params.PropertyId;
    const property_price = await PropertyPrice.findOne({
        where: { PropertyId: id },
      });
 res.json(property_price);
});


router.put("/updatePricing/:PropertyId", async (req, res) => {
    const id = req.params.PropertyId;
    const cleaning_fee = req.body.cleaning_fee;
    const guest_after=req.body.guest_after;
  
    const guest_fee = req.body.guest_fee;
    const security_fee=req.body.security_fee;


    const price = req.body.price;
    const weekend_price=req.body.weekend_price;


    const weekly_discount = req.body.weekly_discount;
    const monthly_discount=req.body.monthly_discount;

    const currency_code=req.body.currency_code;
  
    
    const pricing = await PropertyPrice.update({ cleaning_fee, guest_after, guest_fee,security_fee, 
        price, weekend_price,weekly_discount,monthly_discount,currency_code},{ where: { PropertyId: id }});
  
    res.json(pricing);
    console.log(pricing);
});



module.exports=router;