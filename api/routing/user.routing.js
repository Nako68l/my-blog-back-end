const app = require('express');
const router = app.Router();
const mongoose = require('mongoose');
const bcrypt  = require('bcrypt');
const User = require('../models/user.model');

router.post('/singup', (req, res) => { 
    User.find({email: req.body.email})
    .then(users => {
        if (users.length >= 1) {
            res.status(409).json({
                error: 'Email already exists!'
            })
        }else{
            new User({
                _id: mongoose.Types.ObjectId(),
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                createdAt: new Date()
            }).save((err, doc)=>{
                if (err) {
                    res.status(500).json({error: err})
                }
                res.status(200).json(doc);
            })
        }
    })
    
 })

 module.exports = router