const Mongoose = require('mongoose');
const Schema = Mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator');
const mongoosePaginate = require('mongoose-paginate');

const burgerSchema = new Schema({
  title: {
    type: 'string',
    unique: true,
  },
  ingredients: [
    {
      ingredient: {
        type: Schema.Types.ObjectId,
        ref: 'Ingredient',
      },
      amount: 'string'
    }
  ],
  category:
  {
    type: Schema.Types.ObjectId,
    ref: 'Category',
  },

  image: {
    type: 'string',
    required: false
  },
  cookingTime: {
    type: 'number',
    required: true
  },

  steps: {
    type: 'string',
    required: false
  },

},
  {
    timestamps: true,
  });

burgerSchema.plugin(uniqueValidator);
burgerSchema.plugin(mongoosePaginate);

const BurgersModel = Mongoose.model('Burger', burgerSchema);

module.exports = BurgersModel;