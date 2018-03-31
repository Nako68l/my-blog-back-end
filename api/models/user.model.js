const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    nick: {type: String, require: true},
    email: {type: String, require: true},
    createdAt: {type: Date, require: true},
})

mongoose.model('User', userSchema);