               
               //this is very bad practice to write end points 


// const note=require('./note.js')
// var result=note.age;
// console.log(result);
// var funh=note.addnum(10,39);
// console.log(funh);


// ============================================================================================================================================================

 const express=require('express');
 const app=express();

 const bodyParser = require('body-parser');
 app.use(bodyParser.json());

 require('./db');
 app.get('/', function(req,res){
    res.send('Hey Faiz welcome to my hotel');  //body parse ye middle ware hai jo data lake deta hai
 })                                            //body  parse this is the middle ware of express js 
                      


 // ==============================================================================


 


const personRoutes = require('./routes/PersonRoutes');
 // Parameterizes=d call of peroson 
app.use('/Person',personRoutes);

const MenuRoutes = require('./routes/MenuRoutes');
 // Parameterizes=d call of peroson 
app.use('/Menu',MenuRoutes);

// newPerson.name=data.name;
// newPerson.age=data.age;
 app.listen(3000,()=>{
console.log("server is runing");
 })
//     if(error){
//       console.log('Error saving person:',error);
//       res.status(500).json({error:'Internal error is there'});
//     }
//  })





