const express = require("express");
const router = express.Router();
const { PropertyAddress } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");
const { sign } = require("jsonwebtoken");




router.post("/",async(req,res)=>{



    const {PropertyId,address_line_1,address_line_2,city,state,postal_code,latitude,longitude}=req.body;


    var prop_code="2001";

    var country="United States";

   

    const property_address= await  PropertyAddress.create({
        PropertyId:PropertyId,
        prop_code:prop_code,
        address_line_1:address_line_1,
        address_line_2:address_line_2,
        latitude:latitude,
        longitude:longitude,
        city:city,
        state:state,
        country:country,
        postal_code:postal_code,
       
      });
      res.json(property_address);
      
      console.log(property_address);
  
});

router.get("/getBypropertyId/:PropertyId", async (req, res) => {
  const id = req.params.PropertyId;
  const property_address = await PropertyAddress.findOne({
      where: { PropertyId: id },
    });
res.json(property_address);
});

router.put("/updateAddress/:PropertyId", async (req, res) => {
  const id = req.params.PropertyId;

  var country="United States";

  const address_line_1 = req.body.address_line_1;
  const address_line_2=req.body.address_line_2;

  const latitude = req.body.latitude;
  const longitude=req.body.longitude;


  const city = req.body.city;
  const state=req.body.state;


  const postal_code = req.body.postal_code;


  
  const property_address = await PropertyAddress.update({country,address_line_1,address_line_2,city,state,postal_code,latitude,longitude},{ where: { PropertyId: id }});

  res.json(property_address);
  console.log(property_address);
});


router.get("/searchbyaddress/:address_line_2", async (req, res) => {
  const id = req.params.address_line_2;
  const name = req.body.name;
  const private_name=req.body.private_name;

  const property = await PropertyAddress.find({ where: { id: id }});
  res.json(property);
});


module.exports=router;