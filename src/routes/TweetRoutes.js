const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client');
const { error } = require('console');
const prisma = new PrismaClient();
//Create Tweet
router.post('/', async (req, res) => {
    try{
        const {content,image,UserID}=req.body
        const newtweet=await prisma.tweet.create({data:{content,image,UserID}})
        res.status(200).json(newtweet);
    }catch(err)
    {
        res.status(400).json({error : "Cant Tweet"})
    }
});

// Get all tweets
router.get('/', async (req, res) => {
    try{
        const alltweets=await prisma.tweet.findMany();
        res.status(200).json(alltweets);
    }catch(err)
    {
        res.status(400).json({error:"Somthing wrong"})
    }
    
});

// Get one tweet by id
router.get('/:id', async (req, res) => {
    const id=req.params.id;
    const tweet=await prisma.tweet.findUnique({where:{id:Number(id)}})
    if(tweet){
        res.status(200).json(tweet);
    }
    else{
        res.status(400).json({error:"There is no tweet with this id"})
    }
});

// Delete Tweet
router.delete('/:id',async (req,res)=>{
    const id=req.params.id;
    await prisma.tweet.delete({where:{id:Number(id)}});
    res.status(200).json({message: `Tweet Deleted by id= ${id}`})
})

module.exports=router
