const express = require('express');
const router = express.Router();

//Create Tweet
router.post('/', (req, res) => {
    res.status(200).json({message: "Tweet created"});
});

// Get all tweets
router.get('/', (req, res) => {
    res.status(200).json({message: "All tweets"});
});

// Get one tweet by id
router.get('/:id', (req, res) => {
    const id=req.params.id;
    res.status(200).json({message: `Tweet by id= ${id}`});
});

// Delete Tweet
router.delete('/:id',(req,res)=>{
    const id=req.params.id;
    res.status(200).json({message: `Tweet Deleted by id= ${id}`})
})

module.exports=router
