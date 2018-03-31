const app = require('express');
const router = app.Router();
const mongoose = require('mongoose');
const Post = require('../models/post.model');

router.post('/', (req, res) => {
    new Post({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        article: req.body.article,
        createdAt: new Date(),
        createdBy: req.body.createdBy,
        comments: req.body.comments
    }).save((err,doc)=>{
        if (err) {
            res.status(500).json({})
        }
        console.log(req.body);
        res.status(200).json(doc);
    });
})

module.exports = router;