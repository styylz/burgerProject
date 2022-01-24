const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const fruitsSchema = new mongoose.Schema({
  //id bus sukurtas automatiskai
 name: {
   type: 'string',
   required: true,
   unique: true
 },
 price: {
   type: 'number',
   required: true
 },
}, {
  timestamps: true
});

fruitsSchema.plugin(uniqueValidator)

const FruitModel = mongoose.model('Fruit', fruitsSchema)

module.exports = FruitModel