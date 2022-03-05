const IngredientModel = require('../models/ingredient-model')
const IngredientViewModel = require('../view-models/ingredient-view-model')

const getIngredients = async (req, res) => {
    try{
        const IngredientDocs = await IngredientModel.find()
        const Ingredients = IngredientDocs.map(Ingredient => new IngredientViewModel(Ingredient))
        res.status(200).json(Ingredients)
    } catch (error) {
        res.status(400).json('error')
    }
}

const createIngredient = async (req, res) => {
    const { title} = req.body
    const IngredientDoc = await IngredientModel({title});
    console.log(title)
    try {
        await IngredientDoc.save();
        const Ingredients = new IngredientViewModel(IngredientDoc);

        res.status(201).json(Ingredients);
    } catch (error) {
        res.status(400).json({
            message: `Klaida: jau yra toks Ingredientas`,
        });
    }
  };

const getIngredient = async(req,res) => {
    const {id} = req.params
    try{
        const IngredientDocs = await IngredientModel.findById(id)
        const Ingredient = new IngredientViewModel(IngredientDocs)

        res.status(200).json({Ingredient})

    } catch (error){
        res.status(400).json({
            message: `Klaida: pagal toki id Ingredientas nebuvo rastas`
        })
    }
}

const deleteIngredient = async(req,res) => {
    const {id} = req.params
    try{
        const IngredientDocs = await IngredientModel.findByIdAndDelete(id)
        const Ingredient = new IngredientViewModel(IngredientDocs)
        res.status(200).json({
            Ingredient
        })
    } catch (error){
        res.status(400).json({
            message: 'Klaida: pagel toki id neimanoma istrinti Ingrediento '
        })
    }
}

const updateIngredient = async(req,res) => {
    const {id} = req.params
    const {title} = req.body
    try {
        await IngredientModel.findById(id)

        try {
            const ingredientDoc = await IngredientModel.findByIdAndUpdate(
                id,
                {title},
                {new: true}
            )
            const Ingredient = new IngredientViewModel(ingredientDoc)
            res.status(200).json(Ingredient)

        } catch (error) {

            res.status(400).json({
                message: `blogi parametrai `
            })
        }
    } catch (error) {
        res.status(400).json({
            message: `Klaida: nepavyko atnaujint duomenu pagal ${id} `
        })

    }
}
const replaceIngredient = async(req,res) => {
    const {id} = req.params
    const {title} = req.body
    try {
        await IngredientModel.findById(id)

        try {
            const ingredientDoc = await IngredientModel.findByIdAndReplace(
                id,
                {title},
                {new: true}
            )
            const Ingredient = new IngredientViewModel(ingredientDoc)
            res.status(200).json(Ingredient)

        } catch (error) {
            res.status(400).json({
                message: `Klaida: nepavyko atnaujint duomenu pagal ${id} `
            })

        }
    } catch (error) {

        res.status(400).json({
            message: `Klaida: nepavyko atnaujint duomenu pagal ${id} `
        })
    }
}






module.exports = {
    getIngredients,
    createIngredient,
    getIngredient,
    deleteIngredient,
    updateIngredient,
    replaceIngredient
}