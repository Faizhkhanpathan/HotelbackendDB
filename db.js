const mongoose = require('mongoose');

const mongodb_Url = "mongodb://127.0.0.1:27017/mydb";

const db = mongoose.connection;

mongoose.connect(mongodb_Url);

db.on('connected',()=>{
    console.log("databse is connected");
})
db.on('error',()=>{
    console.log("error is here");
})
db.on('disconnected',()=>{
    console.log('Not connected');
})