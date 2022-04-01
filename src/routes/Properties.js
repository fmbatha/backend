const express = require("express");
const router = express.Router();
const { Properties,Users,Bookings,PropertyAddress,Images,PropertyPrice,Payments,PropertyDates} = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");
const { sign } = require("jsonwebtoken");
const db = require("../models");

const Sequelize=require('sequelize')

const Op=Sequelize.Op



function between(min, max) {  
    return Math.floor(
      Math.random() * (max - min + 1) + min
    )
  }



  console.log(  
    between(100, 9999)
  );


router.post("/",async(req,res)=>{


    const {name,prop_code,property_type,private_name,url_name,bedrooms,beds,bathrooms,
        space_type,city,UserId }=req.body;




    var amenities="Wifi";

    var mss="15";

    var policy_id="1";


    var accommodates="7";

    var booking_type="Instant";

    var minimum_stay="3";

    var cancellation="Yes";

    var status="Available";

    var featured="Yes";

    var bed_type='Queen';
    


    try {


   const property= await Properties.create({
        name:name,
        prop_code:prop_code,
        private_name:private_name,
        url_name:url_name,
        host_id:UserId,
        bedrooms:bedrooms,
        
        beds:beds,
        bed_type:bed_type,
        bathrooms:bathrooms,
        amenities:amenities,
        property_type:property_type,
        space_type:space_type,


        accommodates:accommodates,
        booking_type:booking_type,
        minimum_stay:minimum_stay,
        minimum_stay_seasonal:mss,
        policy_id:policy_id,
        featured:featured,
        cancellation:cancellation,
        city:city,

        status:status,
        UserId:UserId,
       
      });
      res.json(property);
      

      console.log(property);

    } catch (err) {
      console.error(err.message)
    }
     
  
});


router.get("/allproperties",async(req,res)=>{
  const propertyList= await Properties.findAll({include:[Users]});

 // const likedPosts = await Likes.findAll({where: {UserId:req.user.id }});

 //  res.json({listOfPosts:listOfPosts,likedPosts:likedPosts});
  res.json(propertyList);
});


router.get("/getpayments",async(req,res)=>{
  const propertyList= await Properties.findAll({include: [Payments]});

 // const likedPosts = await Likes.findAll({where: {UserId:req.user.id }});

 //  res.json({listOfPosts:listOfPosts,likedPosts:likedPosts});
  res.json(propertyList);
});


router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const property = await Properties.findByPk(id,{include:[ {model:Images,as:Images}]});

  //onst images = await Images.findOne({ where: { PropertyId: id }});
  res.json(property);
});


router.get("/getPropById/:id", async (req, res) => {
  const id = req.params.id;
  const property = await Properties.findByPk(id,{include:[Bookings]});

  //onst images = await Images.findOne({ where: { PropertyId: id }});
  res.json(property);
});



router.get("/getGetPropDatesByPropId/:id", async (req, res) => {
  const id = req.params.id;
  const property = await PropertyDates.findAll({ where: { PropertyId: id },include:[Properties]});

  //onst images = await Images.findOne({ where: { PropertyId: id }});
  res.json(property);
});






router.put("/update/:id", async (req, res) => {
   const id = req.params.id;
  //const id = req.params.id;
  const bathrooms = req.body.bathrooms;
  const bedrooms=req.body.bedrooms;

  const beds = req.body.beds;
  const bed_type=req.body.bed_type;

  const property_type=req.body.property_type;

  const accommodates=req.body.accommodates;


  try {

 
  const property = await Properties.update({ bathrooms: bathrooms,bedrooms:bedrooms,beds:beds,bed_type:bed_type,property_type:property_type,accommodates:accommodates }, {
    where: {
      id: id
    }
  });


  if (!property) 
  throw ('Error while Updating')

  res.json(property);
  console.log(property);


} catch (err) {
  console.error(err.message)
}
});



router.get("/updatex/:id", async (req, res) => {
  const id = req.params.id;
   //const id = req.params.id;
  
 
 
   try {
 
  
   const property = await Properties.update({ where: { id: id }});
 
 
   if (!property) 
   throw ('Error while Updating')
 
   res.json(property);
   console.log(property);

 
 } catch (err) {
   console.error(err.message)
 }
 });


router.put("/updatepropnames/:id", async (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const private_name=req.body.private_name;
  const url_name=req.body.url_name;


  const property_2 = await Properties.update({name,private_name,url_name},{ where: { id: id }});

  res.json(property_2);
  console.log(property_2);
});

router.put("/updatepropnames/:id", async (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const private_name=req.body.private_name;

  const property_2 = await Properties.update({name,private_name},{ where: { id: id }});

  res.json(property_2);
  console.log(property_2);
});

router.put("/updatepropbooking/:id", async (req, res) => {
  const id = req.params.id;
  const booking_type = req.body.booking_type;
  const minimum_stay=req.body.minimum_stay;

  const minimum_stay_seasonal = req.body.minimum_stay_seasonal;
  const cancellation=req.body.cancellation;

  
  const property_ = await Properties.update({booking_type,minimum_stay,minimum_stay_seasonal,cancellation},{ where: { id: id }});

  res.json(property_);
  console.log(property_);
});

router.put("/updateamenities/:id", async (req, res) => {
  const id = req.params.id;
  const amenities = req.body.amenities;

  try {

    const property = await Properties.update({amenities},{ where: { id: id }});

  res.json(property);
  console.log(property);

  }catch(err){
    console.log({ error: err });
  }

  
});



router.get("/searchOnAddress", async (req, res) => {


  try {

  const properties=await db.sequelize.query("SELECT * FROM properties where name LIKE 'test%'",{
    model: Properties,
    mapToModel: true, // pass true here if you have any mapped fields

    replacements:{name:'Test Prop'}


  });

 
  res.json(properties);
  console.log(properties);

}catch(err){
  console.log({ error: err });
}

  
});


router.get("/search/:city", async (req, res) => {

  try {

   const city= req.params.city;

  const property_address=await Properties.findAll({where:{city:{[Op.like]:'%'+ city +'%'}},include:[{model:PropertyAddress, as: PropertyAddress}, {model:Images,as:Images},{model:PropertyPrice,as:PropertyPrice} ]});

  res.json(property_address);
  console.log(property_address);
  console.log(city)

}catch(err){
  console.log({ error: err });
}
  
});



module.exports=router;