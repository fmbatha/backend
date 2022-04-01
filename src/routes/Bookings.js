const express = require("express");
const router = express.Router();
const { Bookings,Properties,Users,PropertyAddress,PropertyPrice,Payments,PropertyDates} = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");
const { sign } = require("jsonwebtoken");



{/*router.post("/",async(req,res)=>{



    const {PropertyId, code, UserId, user_id, start_date, end_date, status, guest, total_night, per_night, custom_price_dates, 
        base_price, cleaning_charge, guest_charge, service_charge, security_money, host_fee, total, booking_type, currency_code,
         cancellation, transaction_id, payment_method_id, accepted_at, expired_at, declined_at, cancelled_at, 
    cancelled_by, added_by, confirm_arrival_status, deleted_status, category_id}=req.body;

   
    Bookings.create({
        property_id:PropertyId,
        code:code,
      
        host_id:UserId,
        user_id:user_id,
        
        start_date:start_date,
        end_date:end_date,
        guest:guest,
        amenities:amenities,
        property_type:property_type,
        space_type:space_type,


        total_night:total_night,
        booking_type:booking_type,
        minimum_stay:minimum_stay,
        policy_id:policy_id,
        featured:featured,
        cancellation:cancellation,


        transaction_id:transaction_id,
        payment_method_id:payment_method_id,
        accepted_at:accepted_at,
        expired_at:expired_at,
        declined_at:declined_at,
        cancelled_at:cancelled_at,

        status:status,
        UserId:UserId,


        per_night:per_night,
        custom_price_dates:custom_price_dates,
        base_price:base_price,


       
        cleaning_charge:cleaning_charge,
        guest_charge:guest_charge,
        service_charge:service_charge,
        security_money:security_money,
        host_fee:host_fee,
        total:total,


        currency_code:currency_code,
        cancelled_by:cancelled_by,
        added_by:added_by,
        confirm_arrival_status:confirm_arrival_status,
        deleted_status:deleted_status,
        category_id:category_id,
      
      


       
      });
      res.json("Success");
  
});*/}


router.post("/",async (req,res)=>{
    


    const {PropertyId, host_id, user_id,UserId,start_date, end_date,  guest, total_night, per_night,total,service_charge,cleaning_charge,guest_name,propertyDates}=req.body;

    var booking_type=1;

    var security_fee=20;

    try {
const booking= await  Bookings.create({
        PropertyId:PropertyId,
        host_id:host_id,
        user_id:user_id,
        UserId:UserId,
        start_date:start_date,
        end_date:end_date,
        guest:guest,
       
        total_night:total_night,
        booking_type:booking_type,

        security_money:security_fee,
        service_charge:service_charge,
        cleaning_charge:cleaning_charge,
      
        

        per_night:per_night,
       
        total:total,

        guest_name:guest_name,

       
      })

      propertyDates.forEach(element => {
      PropertyDates.create({
        PropertyId:PropertyId,
        status:'Not Available',
        date:element,
       
        type:'normal',
      
        price:per_night,

      });
    });



      res.json(booking);
    
      console.log(booking);

    } catch (err) {
        console.error(err.message)
      }
    
  
});



router.get("/bookings",async(req,res)=>{
  const bookingList= await Bookings.findAll({include:[Properties,Users]});

  
  //const usersList = await Users.findAll();

   console.log(bookingList)

  res.json({bookingList:bookingList});
  // res.json(bookingList);
});



router.get("/getbookingById/:id", async (req, res) => {
	const id = req.params.id;
	const booking = await Bookings.findByPk(id);

  const user = await Users.findByPk(booking.user_id);

	console.log("THE USER ID IS",user.id)


  const propertyaddress = await PropertyAddress.findOne({ where: { PropertyId: booking.PropertyId } });

	console.log("THE PROPERTY FROM ADDRESS ID IS",propertyaddress.PropertyId)


  const property = await Properties.findOne({ where: { id: booking.PropertyId } });

	console.log("THE PROPERTY ID IS",property.id)


  const owner = await Users.findOne({ where: { id: property.UserId } });

	console.log("THE HOST ID IS",property.id)



  const propertyprice = await PropertyPrice.findOne({ where: { PropertyId: property.id } });

	console.log("THE PROPERTY ID IS",propertyprice.PropertyId)



  res.json({ booking: booking,user:user,propertyaddress:propertyaddress,property:property,owner:owner,propertyprice:propertyprice});
  
	// res.json(booking);
  });



  router.put("/updatebooking/:id", async (req, res) => {
    const id = req.params.id;
    const PropertyId = req.body.PropertyId;
    const user_id=req.body.user_id;
    const start_date=req.body.start_date;

    const end_date = req.body.end_date;
    const total_night=req.body.total_night;
    const guest=req.body.guest;

    const per_night=req.body.per_night;
    const total=req.body.total;
  
  
    const booking_up = await Bookings.update({PropertyId,user_id,start_date,end_date,total_night,per_night,total,guest},{ where: { id: id }});
  
    res.json(booking_up);
    console.log(booking_up);
  });


  router.put("/confirm_arrival/:id", async (req, res) => {
    const id = req.params.id;
   
    const confirm_arrival_status=req.body.confirm_arrival_status;
   
  
    const status_confirm = await Bookings.update({confirm_arrival_status},{ where: { id: id }});
  
    res.json(status_confirm);
    console.log(status_confirm);
  });

  router.put("/update_status/:id", async (req, res) => {
    const id = req.params.id;
   
    const status=req.body.status;
   
  
    const change_status = await Bookings.update({status},{ where: { id: id }});
  
    res.json(change_status);
    console.log(change_status);
  });


  router.put("/update_cancellation/:id", async (req, res) => {
    const id = req.params.id;
   
    const status=req.body.status;
    const cancelled_at=req.body.cancelled_at;
   
  
    const change_status = await Bookings.update({status,cancelled_at},{ where: { id: id }});
  
    res.json(change_status);
    console.log(change_status);
  });

  router.get("/booking_payments/:id", async (req, res) => {
    const id = req.params.id;

    const booking = await Bookings.findOne({ where: { id: id },include:[Payments] });

  
    res.json(booking);
    console.log(booking);
  });


module.exports=router;