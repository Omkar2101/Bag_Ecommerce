const express = require('express');

const router = express.Router();
const userModel=require("../models/user-model")
const jwt =require("jsonwebtoken");
const bcrypt=require("bcrypt")


router.get('/', function (req, res){
    res.send('Working!');
})

router.post('/register',  function (req, res){
    try {
        let {fullname,email,password} = req.body;

        //using the bcrypt algorithm
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(password, salt,async function(err, hash) {
                if(err){
                    res.send(err.message)
                }
                else{
                    let user=await userModel.create({
                        fullname:fullname,
                        email:email,
                        password:hash,
                    })
                    //using the jwt to send  the cookie
                    var token = jwt.sign({email,id:user._id}, 'shhhhh');
                    //sending the token as a cookie
                    res.cookie("token",token)
                    res.send("User registered successfully")
                    

                }
            });
        });
        
       
        
        
        
    } catch (error) {
        console.log(error.message);
        
    }
   


})
module.exports = router;