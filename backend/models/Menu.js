const mongoose = require('mongoose');


const MenuSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    taste:{
        type:String,
        enum:['sweet','Tastless','Sour','oily']
    },
    price:{
        type:Number,
        required:true
    }
})
const Menu = mongoose.model('menu',MenuSchema);
module.exports = Menu;