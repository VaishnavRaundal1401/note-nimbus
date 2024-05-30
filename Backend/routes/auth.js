const express = require('express');
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = 'Leviisthebestsoldier';
// create a user using POST: "/api/auth/User"
router.post('/User',[
    body('name','Enter a valid name').isLength({min: 3}),
    body('email','Enter a valid email').isEmail().notEmpty(),
    body('password','Password length must be 5 characters').isLength({min:5}).notEmpty()
] ,async (req, res)=>{
    //If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try{
        //check whether the user with the same email and password exists or not
        let user = await User.findOne({email:req.body.email});
        let pass = await User.findOne({password:req.body.password});
        if(pass && user){
            return res.status(400).json({error:"sorry a user with this password and email already exists"});
        }
        else if(user){
            return res.status(400).json({error:"sorry a user with this email already exists"});
        }
        else if(pass){
            return res.status(400).json({error:"sorry a user with this password already exists"});
        }

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);

        //Create new User
         user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass
        });
        const data = {
            user:{
                id:user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        res.json({authToken});
    }catch (error) {
        console.error(error.message);
        res.status(500).send("Some Error occurred");
    }
})
//authenticate  user using POST: "/api/auth/login"
router.post('/login',[
    body('email','Enter a valid email').isEmail().notEmpty(),
    body('password','Password length must be 5 characters').notEmpty()
] ,async (req, res)=>{
    let success = false;
    // console.log(req);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const {email, password} = req.body;
    try {
         //check whether the user has entered the correct email and password
        let user = await User.findOne({email});
        //if not send error
        if(!user){
            success = false;
            return res.status(400).json({success, error:"please try to login with correct credentials"});
        }
        const passCompare = await bcrypt.compare(password, user.password);
        if(!passCompare){
            success = false;
            return res.status(400).json({success, error:"please try to login with correct credentials"});
        }
        const data = {
            user:{
                id:user.id
            }
        }
        //send authToken i.e, the id and the token secret to the user while 1st login
        const authToken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({success, authToken});

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some Error occurred");
    }
})

// GET logged in User details
router.post('/getuser', fetchuser, async (req, res)=>{
    try {
        const userid = req.user.id;
        const user = await User.findById(userid).select("-password");
        res.send(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router;