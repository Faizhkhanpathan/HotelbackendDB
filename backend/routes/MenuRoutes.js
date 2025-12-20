const express = require('express');
const router = express.Router();
 const Menu = require('../models/Menu');

router.post('/', async (req,res)=>{
   try{
   const data = req.body;
   const newMenu = new Menu(data);
   const savedMenu = await newMenu.save();
   console.log('data is saved');
   res.status(201).json(savedMenu);
  }catch(error){
console.log(error);
res.status(500).json({error:'Internal server error'});
 }
})


router.get('/', async (req,res)=>{
  try{
const newMenu= await Menu.find();
res.status(201).json(newMenu);
console.log("data fetch sucessfully");
  }catch(error){
    console.log(error);
   res.status(500).json({error:'Invalid req'});
  }
})
router.get('/:tastType', async (req,res)=>{
  try{
     const tastType= req.params.tastType;
   if(tastType==='sweet'||tastType ==='tastless'||tastType === 'sour'|| tastType === 'oily'){
     const response = await Menu.find({taste:tastType});
     console.log('data fetch suncessfully');
     res.status(200).json(response);
  }else{
    res.status(400).json({error:'invalid request'});
  }

  }catch(error){
 console.log(error);
 res.status(500).json({error:'Invalid Work Type'});
  }
})




 module.exports=router;