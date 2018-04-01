const mongoose = require('mongoose');

let postSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {type: String, require: true},
    article: {type: String, require: true},
    createdAt: {type: Date, require: true},
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    // comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
})

module.exports = mongoose.model('Post', postSchema);