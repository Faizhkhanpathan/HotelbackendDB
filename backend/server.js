               
               //this is very bad practice to write end points 


// const note=require('./note.js')
// var result=note.age;
// console.log(result);
// var funh=note.addnum(10,39);
// console.log(funh);

// ============================================================================================================================================================
require('dotenv').config();
 const express=require('express');
 const app=express();
 const passport = require('./auth');
const Person = require('./models/Person');

 const bodyParser = require('body-parser');
 app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;
 require('./db');
app.use(passport.initialize());

 const LocalauthMiddleWare = passport.authenticate('local', { session: false });



 app.get(
  '/Person',LocalauthMiddleWare,  
  async (req, res)=>{
   try{
   const data=await Person.find();
   console.log('data saved');
  res.status(200).json(data);
   }catch(error){
     console.log(error);
  res.status(500).json({error:'Internal server error'});
   }
 })
 app.get('/'  ,function(req,res){
    res.send('Hey Faiz welcome to my hotel');  //body parse ye middle ware hai jo data lake deta hai
 
   })                                            //body  parse this is the middle ware of express js 
                      


 // ==============================================================================


 


const personRoutes = require('./routes/PersonRoutes');
 // Parameterizes=d call of peroson 
app.use('/Person', LocalauthMiddleWare, personRoutes);


const MenuRoutes = require('./routes/MenuRoutes');
 // Parameterizes=d call of peroson 
app.use('/Menu',MenuRoutes);

// newPerson.name=data.name;
// newPerson.age=data.age;

 app.listen(PORT,()=>{
console.log("server is runing");
 })
//     if(error){
//       console.log('Error saving person:',error);
//       res.status(500).json({error:'Internal error is there'});
//     }
//  })





