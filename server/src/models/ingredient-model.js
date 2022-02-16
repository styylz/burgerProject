const Mongoose = require('mongoose')

const ingredientSchema = new Mongoose.Schema({
    title: {
        type: 'string',
        unique: true,
    },
},
{
    timestamps: true
})


const IngredientModel = Mongoose.model('Ingredient', ingredientSchema)

module.exports = IngredientModel