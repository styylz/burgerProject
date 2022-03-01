const Mongoose = require('mongoose');

const categoriesSchema = new Mongoose.Schema({
  title: {
    type: 'string',
    required: true,
    unique: true
  },
},
{
  timestamps: true,
});


const CategoriesModel = Mongoose.model('Category', categoriesSchema);

module.exports = CategoriesModel;