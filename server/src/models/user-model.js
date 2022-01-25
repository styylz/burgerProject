const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const { isEmail } = require('validator');

const userSchema = new mongoose.Schema({
  email: {
    type: 'string',
    required: true,
    validate: {
      validator: isEmail,
      message: 'Incorrect email format',
    },
    unique: true,
  },
 name: {
   type: 'string',
   required: true,
 },
 surname: {
   type: 'string',
   required: true
 },
}, {
  timestamps: true
});

userSchema.plugin(uniqueValidator)

const FruitModel = mongoose.model('User', userSchema)

module.exports = FruitModel