const express = require('express');
const router = express.Router();
const Menu = require('../models/Menu');


// router.use(logRequest);
router.post('/',  async (req,res)=>{
    try{
const data = req.body;
    const Menuschema = new Menu(data);
    const response = await Menuschema.save();
    res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Invalid request'});
    }

})
//================================================================================================================
   
                    //Update operations 
 
//=================================================================================================================

router.put('/:id', async (req,res)=>{  //PUT request banaya to update data using id
    try{
const Menuid = req.params.id;   //URL se id extract ki (/person/123 → 123).
  const updatePersonData = req.body;  //Client se aaya updated JSON data.
  const response = await Menu.findByIdAndUpdate(
      Menuid,
      updatePersonData,
      {
        new: true,          // updated document return kare
        runValidators: true // schema validation check kare
      }
    );
console.log('data updated');
res.status(200).json(response);
if(!response){
res.status(404).json({error:'Invalid id'});

}
    }catch(error){
        console.log(error);
res.status(500).json({error:'Invalid request'});


    }
  
})

// =================================================================================

//  delete using parameter

// ==================================================================================
router.delete('/:id', async (req,res)=>{  //PUT request banaya to update data using id
    try{
const Menuid = req.params.id;   //URL se id extract ki (/person/123 → 123).  //Client se aaya updated JSON data.
  const response = await Menu.findByIdAndDelete(Menuid);
console.log('data updated');
res.status(200).json(response);
if(!response){
res.status(404).json({error:'Invalid id'});

}
    }catch(error){
        console.log(error);
res.status(500).json({error:'Invalid request'});


    }
  
})

router.get('/', async (req,res)=>{
    try{
const data = await Menu.find();
console.log('Data recieve sucessfully');
    res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Invalid request'});
    }

})

module.exports = router;