const Mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const categoriesSchema = new Mongoose.Schema({
  title: {
    type: 'string',
    unique: true,
  },

},
{
  timestamps: true,
});

categoriesSchema.plugin(uniqueValidator);

const CategoriesModel = Mongoose.model('Category', categoriesSchema);

module.exports = CategoriesModel;