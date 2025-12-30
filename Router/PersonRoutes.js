const express = require('express');
const router = express.Router();
const Person = require('../models/Person');
router.post('/', async (req,res)=>{
    try{
  const data = req.body;
  const PersonSchema = new Person(data);
  const response = await PersonSchema.save();
  console.log("data saved sucessfully");
  res.status(200).json(response);
    }catch(error){
        console.log(error);
        
    }
  
})

router.get('/', async (req,res)=>{  //  route get
    try{
  const data = await Person.find();
  console.log("data gets sucessfully");
  res.status(200).json(data);
    }catch(error){
        console.log(error);
        
    }
  
})

router.get('/:Worktype', async (req,res)=>{
    const Worktype = req.params.Worktype;
    try{
    if(Worktype==='chef'||Worktype==='broker'||Worktype==='developer'||Worktype==='buisness'){
        const response =  await Person.find({work:Worktype});
        console.log("Data get sucessfully");
        res.status(200).json(response);
    }else{
        res.status(404).json({error:'Invalid work type'});

    }
    }catch(error){
        console.log(error);
        res.status(500).json({error:'Invalid request'})
    }
})

module.exports=router;