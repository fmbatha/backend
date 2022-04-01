const express = require("express");
const router = express.Router();
const { PropertyDescription } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");
const { sign } = require("jsonwebtoken");





router.post("/",async(req,res)=>{

    const {property_id,summary }=req.body;

    var interaction_guests="interaction_guests";

    try {
   const property_description= await PropertyDescription.create({
         property_id:property_id,
         summary:summary,
         interaction_guests:interaction_guests,
   
       
      });

      res.json(property_description);
    } catch (err) {
        console.error(err.message)
      }
   
    //   console.log(property_description);
     
  
});

router.get("/byPropertyId/:PropertyId", async (req, res) => {
  const id = req.params.PropertyId;
  const description = await PropertyDescription.findOne({
      where: { property_id: id },
    });
res.json(description);
});


router.put("/updatedescription/:PropertyId", async (req, res) => {
  const id = req.params.PropertyId;
  const summary = req.body.summary;
  

  
  const pdescription = await PropertyDescription.update({summary},{ where: { property_id: id }});

  res.json(pdescription);
  console.log(pdescription);
});


module.exports=router;
