const express = require('express');
const router = express.Router();
 const Person=require('./../models/Person');


router.post('/', async (req,res)=>{
   try{
 const data =req.body;
  const newPerson = new Person(data);
  const response = await newPerson.save();
  console.log('data is saved');
  res.status(201).json(response);
   }catch(error){
console.log(error);
  res.status(500).json({error:'Internal server error'});
   }
 })


  router.get('/:WorkType', async (req,res)=>{
    try{
      const WorkType=req.params.WorkType;
  if(WorkType === 'chef' || WorkType === 'employee' || WorkType === 'businessman'|| WorkType ==='developer'){
   
     const response = await Person.find({work:WorkType});
     console.log("response fetched");
     res.status(200).json(response);
  }else{
res.status(404).json({error:'Invalid worktype'});
  }
    }catch(error){
  console.log(error);
 res.status(500).json({error:'invalid Work type'})
    }
 })

 const logRequest=(req,res,next)=>{
console.log(`[${new Date().toLocaleString()}] Request Made to : ${req.orginalUrl}`);
next();
 }
 router.use(logRequest);
 
 router.get('/', async (req,res)=>{
   try{
   const data=await Person.find();
   console.log('data saved');
  res.status(201).json(data);
   }catch(error){
     console.log(error);
  res.status(500).json({error:'Internal server error'});
   }
 })
router.put('/:id', async (req,res)=>{
  try{
const personId = req.params.id;
const updatePersonData = req.body;
const response = await Person.findByIdAndUpdate(personId,updatePersonData,{
   new:true,
   runValidators:true
})

  if (!response) {
      return res.status(404).json({ error: 'Person not found' });
    }
    console.log('data updated');
res.status(200).json(response)
  }catch(error){
  console.log(error);
 res.status(500).json({error:'invalid server error '})
  }
})
 

router.delete('/:id', async (req,res)=>{
  try{
 const personId = req.params.id;
  const response = await Person.findByIdAndDelete(personId);
   if (!response) {
      return res.status(404).json({ error: 'Person not found' });
    }
    console.log('data delete');
    res.status(200).json({message:'Data deleted'});
  }catch(error){
  console.log(error);
 res.status(500).json({error:'invalid server error '})
}
})
 module.exports=router;



 //Data save and update 

 //We Use put and Patch