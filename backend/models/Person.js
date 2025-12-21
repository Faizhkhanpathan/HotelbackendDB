const mongoose=require('mongoose');
//Define person schema
const bycrpt = require('bycrpt');
const personSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    work:{
     type:String,
     enum:['chef','developer','buisnessman','employee']
    },
    mobile:{
  type:Number,
  required:true
    },
 email:{
    type:String,
 required:true,
 unique:true
},
address:{
    type:String,
    required:true
},
salary:{
type:Number,
required:true
},
  username: {
    type: String,
    unique: true
  },

  password: {
    type: String,
    required: true
  }

});
//  personSchema.pre('save',async function(next){  //ye batara hoga ki ab tum jake db me save kardo
//   try{

//   }catch()

//  });
//create person model
const Person=mongoose.model('Person',personSchema);
module.exports = Person;