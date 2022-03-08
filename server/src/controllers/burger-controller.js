const BurgersModel = require('../models/burger-model')
const BurgersViewModel = require('../view-models/burger-view-model');
const IngredientModel = require('../models/ingredient-model');
const IngredientViewModel = require('../view-models/ingredient-view-model');

const getBurgers = async (req, res) => {
  const page = req.query._page
  const limit = req.query._limit
  const startIndex = (page - 1) * limit
  const endIndex = page * limit

  const burgerDocs = await BurgersModel.find()
    .populate('category')

  const burgers = burgerDocs.map(burger => new BurgersViewModel(burger));
  const populatedBurgers = await Promise.all(
    burgers.map(async (burger) => ({
      ...burger,
      ingredients: await Promise.all(
        burger.ingredients.map(async ({ ingredient, amount }) => ({
          amount,
          ingredient: new IngredientViewModel(await IngredientModel.findById(ingredient))
        }))
      )
    }))
  );

  const result = populatedBurgers.slice(startIndex, endIndex)

  res.status(200).json(
    {
      data: result,
      dataLength: populatedBurgers.length,
      burgers: populatedBurgers
    }
  )

}

const createBurger = async (req, res) => {
  const { IMG_FOLDER_NAME } = process.env;
  const image = `${IMG_FOLDER_NAME}/${req.file.filename}`;

  const ingredients = JSON.parse(req.body.ingredients)
    .map(({ id, ingredientId, amount }) => ({
      ingredient: ingredientId,
      amount
    }))

  try {
    const burgerDoc = await BurgersModel.create({ ...req.body, ingredients, image });
    const burger = new BurgersViewModel(burgerDoc);

    res.status(201).json(burger);
  } catch (error) {
    res.status(400).json({
      message: `Klaida: jau yra toks burgeris yra`,
    });
  }
};

const getBurger = async (req, res) => {
  const { id } = req.params
  const BurgerDoc = await BurgersModel.findById(id)
    .populate('category')
  const Burger = new BurgersViewModel(BurgerDoc)
  const populatedBurger = {
    ...Burger,
    ingredients: await Promise.all(
      Burger.ingredients.map(async ({ ingredient, amount }) => ({
        amount,
        ingredient: new IngredientViewModel(await IngredientModel.findById(ingredient))
      }))
    )
  }

  res.status(200).json(populatedBurger)
}


const getBurgersPaginated = async (req, res) => {
  const { page, limit } = req.query;



  const burgers = await BurgersModel.paginate({}, { page, limit }, { populate: "category" });

  const burgerGroup = burgers.docs.map(burger => new BurgersViewModel(burger));
  const populatedBurgers = await Promise.all(
    burgerGroup.map(async (burger) => ({
      ...burger,
      ingredients: await Promise.all(
        burger.ingredients.map(async ({ ingredient, amount }) => ({
          amount,
          ingredient: new IngredientViewModel(await IngredientModel.findById(ingredient))
        }))
      )
    }))
  );

  const result = populatedBurgers.slice(startIndex, endIndex)

  res.status(200).json(
    {
      data: result,
      dataLength: burgers.total,
      burgers: populatedBurgers
    }
  )

}

module.exports = {
  getBurgers,
  createBurger,
  getBurger,
  getBurgersPaginated
}