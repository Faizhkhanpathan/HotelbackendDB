const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); 

const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  work: {
    type: String,
    enum:['chef','broker','developer','buisness'],
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  salary: {
    type: Number,
    required: true
  },
  username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

 PersonSchema.pre('save',async function(next){
  const person = this;
  if(!person.isModified('password')) return next();
  try{
 const salt = await bcrypt.genSalt(10);
 const hashedPassword = await bcrypt.hash(person.password,salt);
 person.password = hashedPassword;
 next();
  }catch(error){
return next(error);
  }
 })

 PersonSchema.methods.comparePassword = async function(candidatePassword){
try{
const isMatch = await bcrypt.compare(candidatePassword,this.password);
return isMatch;
}catch(err){
throw err;
}
 }

const Person = mongoose.model('Person', PersonSchema);
module.exports = person;
