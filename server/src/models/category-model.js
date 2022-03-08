const Mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');


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

categoriesSchema.plugin(mongoosePaginate);


const CategoriesModel = Mongoose.model('Category', categoriesSchema);

module.exports = CategoriesModel;