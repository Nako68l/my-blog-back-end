const mongoose = require('mongoose');

let postSchema = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    body: {type: String, require: true},
    createdAt: {type: Date, require: true},
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
})

module.exports = mongoose.model('Comment', postSchema);