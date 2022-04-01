const express = require("express");
const router = express.Router();

const {Payments,Properties,Bookings,ProperBookings,Users,Payouts,PropertyAddress} = require("../models");

require("dotenv").config()
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)

const cors = require("cors")



router.post("/", cors(), async (req, res) => {
	let { amount, id,booking_id,property_id,UserId} = req.body
	try {
		const payment = await stripe.paymentIntents.create({
			amount,
			currency: "USD",
			description: "Test Guest",
			payment_method: id,
			confirm: true
		})

		const payment_db = await Payments.create({
			payment_amount:amount,
			BookingId: booking_id,
			notes: "Test Guest",
			payment_method_id: 1,
			PropertyId:property_id,
			UserId:UserId
		})

		const payout = await Payouts.create({
			amount:amount,
			BookingId: booking_id,
			user_type: "Guest",
			account: 'nishant.depex@gmail.com',
			penalty_amount:0,
			status:'Completed',
			PropertyId:property_id,
			UserId:UserId
		})
		console.log("Payment", payment)
		console.log("Payment db", payment_db)
		console.log("Payout", payout)
		res.json({
			message: "Payment successful",
			success: true
		})
	} catch (error) {
		console.log("Error", error)
		res.json({
			message: "Payment failed",
			success: false
		})
	}
});


router.get("/allpayments",async(req,res)=>{
	const PaymentsList= await Payments.findAll({include:[Users,Properties,Bookings]});
  
   // const likedPosts = await Likes.findAll({where: {UserId:req.user.id }});
  
   //  res.json({listOfPosts:listOfPosts,likedPosts:likedPosts});
	res.json(PaymentsList);
  });

  router.get("/getpaymentById/:id", async (req, res) => {
	
	const id = req.params.id;
	const payment = await Payments.findByPk(id,{include: [Bookings,Properties,Users]});



	// const booking = await Bookings.findByPk(payment.booking_id);

	// console.log("THE BOOKING ID IS",booking.id)


	// const user = await Users.findByPk(booking.user_id);

	// console.log("THE USER ID IS",user.id)

	// const propertyaddress = await PropertyAddress.findOne({ where: { PropertyId: booking.PropertyId } });

	// console.log("THE PROPERTY ID IS",propertyaddress.PropertyId)

	

//	res.json({ payment: payment, booking: booking,user:user,propertyaddress:propertyaddress});
	res.json(payment);
  });

  



module.exports=router;
