const Mongoose = require('mongoose');
const Schema = Mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator');

const burgersSchema = new Schema({
  title: {
    type: 'string',
    unique: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  ingredientId: [
    {
    type: Schema.Types.ObjectId,
    ref: 'Ingredient',
    }
],
  categoriesId: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Category',
    }
  ],
  cookingTime: {
    type: 'number',
    required: true
  },

  steps: {
    type: 'string',
    required: false
  },

  rating:{
    type: 'number',
    required: true
  }
},
{
  timestamps: true,
});

burgersSchema.plugin(uniqueValidator);

const BurgersModel = Mongoose.model('Burger', burgersSchema);

module.exports = BurgersModel;