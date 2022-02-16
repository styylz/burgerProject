const BurgersModel = require('../models/burger-model')
const BurgersViewModel = require('../view-models/burger-view-model')

const getBurgers = async (req,res) => {
    const BurgerDocs = await BurgersModel.find()
    .populate('userId')
    .populate('categoriesId')
    .populate('ingredientId')
    const Burgers = BurgerDocs.map(burger => new BurgersViewModel(burger))
    console.log(Burgers)

    res.status(200).json({Burgers})

}

const createBurger = async (req, res) => {
  const BurgerDoc = await BurgersModel(req.body);
  try {
    await BurgerDoc.save();
    const Burger = new BurgersViewModel(BurgerDoc);
    console.log(Burger)

      res.status(201).json(Burger);
  } catch (error) {
      res.status(400).json({
          message: `Klaida: jau yra toks burgeris yra`,
      });
  }
};

module.exports ={
  getBurgers,
  createBurger
}