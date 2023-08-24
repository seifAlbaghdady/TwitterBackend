const express  = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


//User

//create user
router.post('/', async (req, res) => {
    try{
    const {email,name,UserName} = req.body;
    const newUser = await prisma.user.create({
        data: {
            email,
            name,
            UserName
        }
    });
    res.status(200).json({message: "User created"});
    }catch(err){
        res.status(500).json({message: err.message});
    }
});

//get all users
router.get('/', async (req, res) => {    
    const allUsers = await prisma.user.findMany();
    res.status(200).json(allUsers);
});

//get one user by id
router.get('/:id', async (req, res) => {  
    const id = req.params.id;  
    const user = await prisma.user.findUnique({where : {id: Number(id)}})
    res.status(200).json(user);
});


//update user
router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const {bio}=req.body;
    try{
    const updatedUser = await prisma.user.update({
        where: {id: Number(id)},
        data: {
            bio
        }
    });
    res.status(200).json({message: `User ${id} updated`});
}catch(err){
    res.status(500).json({message: "Failed to update user bio"});
}
});

//delete user
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    await prisma.user.delete({where:{id:Number(id)}})
    res.status(200).json({message: `User ${id} deleted`});
});

module.exports = router;

