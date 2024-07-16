const express = require('express');

const router = express.Router();
const ownerModel  =require("../models/owner-model")


router.get('/', function (req, res){
    res.send('Working!');
})

//if process.env=development then post route /create
if(process.env.NODE_ENV=="development"){
    router.post('/create', async function (req, res){
    let owners= await ownerModel.find()
    if(owners.length>0){
        return res.status(503).send("you dont have permission to create a new owner")
    }
    else{
        let {fullname,email,password} =  req.body()
        
        let createdowner =await ownerModel.create({
            fullname,
            email,
            password
        })
    }
    })
}
module.exports = router;