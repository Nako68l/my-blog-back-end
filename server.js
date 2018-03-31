const express = require('express');
const app = express();
const mongoose = require('mongoose');

const postRoutes = require('./api/routing/post.routing');



app.use(express.json());

app.use('/post', postRoutes);




const port = process.env.PORT || 3000;
const uri = "mongodb://myblogdbadmin:" + process.env.MONGO_ATLAS_PW + "@cluster0-shard-00-00-wfkym.mongodb.net:27017,cluster0-shard-00-01-wfkym.mongodb.net:27017,cluster0-shard-00-02-wfkym.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";

mongoose.connect(uri);

app.listen(port, ()=> console.log("App running on port "+ port));
