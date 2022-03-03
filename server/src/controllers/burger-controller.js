const BurgersModel = require('../models/burger-model')
const BurgersViewModel = require('../view-models/burger-view-model')

const getBurgers = async (req,res) => {
    const BurgerDocs = await BurgersModel.find()
    .populate('category')
    .populate('ingredients')
    console.log(BurgerDocs)
    const Burgers = BurgerDocs.map(burger => new BurgersViewModel(burger))
    res.status(200).json(Burgers)
}

const createBurger = async (req, res) => {

  const { IMG_FOLDER_NAME} = process.env;
  const image = `${IMG_FOLDER_NAME}/${req.file.filename}`;

  const ingredients= JSON.parse(req.body.ingredients)
  .map(({id, ...ingredient}) => ingredient)
  try {
    const BurgerDoc = await BurgersModel.create({...req.body, ingredients, image});
    const Burger = new BurgersViewModel(BurgerDoc);
    console.log('Burger',Burger)

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