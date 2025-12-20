const mongoose = require('mongoose');
const mongoURL ='mongodb://127.0.0.1:27017/Addmin';

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