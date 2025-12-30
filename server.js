// function in js 

// function add(a,b){
//     return a+b;
// }


// var add = function(a,b){
// return a+b;
// }


// var add = (a,b)=>{return a+b;}

// (function(){
// console.log("Hey Faiz");
// })();

// var result=add(2,3);
// console.log(result);
  

// function callback(){
// console.log("Hey Faiz are you there");
// }
// const node = require('./node');
// var add = function(a,b,callback){
// callback();
//     return a+b;

    
// }

// console.log(add(44,33,()=>{
//     console.log("Hey Faiz");
// }));
// var F=node.a;
// console.log(F);

// ====================================================================================


const express = require('express');
const app= express();
const db=require('./db');
// const Person = require('./models/Person');
const bodyParser = require('body-parser');
const PersonRoutes = require('./Router/PersonRoutes');
const MenuRoutes = require('./Router/MenuRoutes');

app.use(bodyParser.json());  //store into req.body
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("welcome to my hotel Faiz");
})


app.use('/Person',PersonRoutes);
app.use('/Menu',MenuRoutes);


// = ===================================================================================================
                            //   Parameterized url
// = ===================================================================================================

app.listen(3000,()=>{
    console.log("Server is runing");
})

//localhost:- home name  //  3000:-building name