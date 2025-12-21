
const mongoose = require('mongoose');
require('dotenv').config();

const mongoURL = process.env.MONGODB_URL_LOCAL;
if (!mongoURL) {
  console.error("MONGODB_URL_LOCAL not found");
  process.exit(1);
}

mongoose.connect(mongoURL);

const db=mongoose.connection; // we main object  //connection eastablish

//mongose default connection object mantain
//define event Listner
db.on('connected', ()=>{
    console.log("database connected");
})
db.on('disconnected',()=>{
    console.log("database disconnected");
})
db.on('error', (err)=>{
console.log("error is here");
})

module.exports=db;