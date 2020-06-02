const express=require ('express');
const router=express.Router();

const controller=require('./controller');

router.get('/users/:id',controller.getUsers);

module.exports=router;
