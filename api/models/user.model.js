const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: {type: String,unique: true,required: true,trim: true},
    email: {type: String, unique: true, require: true, trim: true},
    password: {type: String,required: true,},
    createdAt: {type: Date, require: true},
})

userSchema.pre('save', function (next) {
    let user = this;
    bcrypt.hash(user.password, 10, function (err, hash){
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    })
  });

module.exports = mongoose.model('User', userSchema);