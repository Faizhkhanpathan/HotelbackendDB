const mongoose = require('mongoose');
require('dotenv').config();
const mongoURL = process.env.mongodb_Url;

const db = mongoose.connection;

mongoose.connect(mongoURL);

db.on('connected',()=>{
    console.log("databse is connected");
})
db.on('error',()=>{
    console.log("error is here");
})
db.on('disconnected',()=>{
    console.log('Not connected');
})