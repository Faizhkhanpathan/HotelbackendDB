const mongoose = require('mongoose');
const Menuschema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
     price:{
        type:Number,
        required:true
    },
     taste:{
        type:String,
        required:true
    },
     is_drink:{
        type:Boolean,
        required:true
    },
     ingredients:{
        type:String,
        enum:["bun", "potato", "spices"],
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const Menu = mongoose.model('Menu',Menuschema);
module.exports=Menu;