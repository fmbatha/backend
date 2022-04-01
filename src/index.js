const express = require("express");
const app = express();
const cors = require("cors");

import path from 'path';
import bodyParser from 'body-parser';
import { success, error } from 'consola';

import { PORT } from './config';

// Import Routes
import imagesRoutes from './routes/images';








//app.use(express.json());
app.use(bodyParser.json());

app.use(cors());


const db = require("./models");



const usersRouter = require("./routes/Users");
app.use("/users", usersRouter);


const propertiesRouter = require("./routes/Properties");
app.use("/property", propertiesRouter);

const propertyAddressRouter = require("./routes/PropertyAddress");
app.use("/property-address", propertyAddressRouter);



const propertyFeeRouter = require("./routes/PropertyFees");
app.use("/property-fee", propertyFeeRouter);




//const propertyImages = require("./routes/images");
//app.use("/images", propertyImages);


// Injecting routes in main app
app.use('/api/images', imagesRoutes);



const amenities = require("./routes/Amenities");
app.use("/amenities", amenities);

const propdesc = require("./routes/PropertyDescription");
app.use("/propdescription", propdesc);

const propertyprices = require("./routes/PropertyPrice");
app.use("/propertyprices", propertyprices);

const booking = require("./routes/Bookings");
app.use("/booking", booking);



const payments = require("./routes/Payments");
app.use("/payment", payments);



const message = require("./routes/Messages");
app.use("/message", message);


const review = require("./routes/Reviews");
app.use("/review", review);



const pages = require("./routes/pages");
app.use("/pages", pages);

const cleaninglady = require("./routes/CleaningTasks");
app.use("/cleaninglady", cleaninglady);


const payouts = require("./routes/Payouts");
app.use("/payout", payouts);


// Setting up the express static directory
app.use(express.static(path.join(__dirname, './public')));


db.sequelize.sync().then(() => {
    app.listen(PORT, () => success({ badge: true, message: `Server started on port ${PORT}` }));
  })
  .catch((err)=>{
console.log(err)
  });
  
  process.on('unhandledRejection', up => { throw up })