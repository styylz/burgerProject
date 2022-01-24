const { v4: generateId } = require('uuid');
const FruitModel = require('../models/fruit-model')
const FruitViewModel =require('../view-models/fruit-view-model')


const getFruits = async(req,res) => {
  const fruitDoc = await FruitModel.find()
  res.status(200).json({
    fruits: fruitDoc.map(fruit => new FruitViewModel(fruit))
  })
};

const getFruit = async (req, res) => {
  const { id } = req.params;
  try {
    const fruitDoc = await FruitModel.findById(id)
    const fruit = new FruitViewModel(fruitDoc)
    res.status(200).json(fruit)
  } catch (error) {
    res.status(400).json ({
      message: `Elementas nerastas su id: ${id}`
    })
  }
}

const createFruit = async(req,res) => {
  const { name, price } = req.body;
  const newFruit = await FruitModel({name, price})
  try {
    await newFruit.save()
    res.status(200).json(new FruitViewModel(newFruit));
  } catch (error) {
    res.status(400).json({
      message: `Klaida: jau yra vaisius su tokiu pavadinimu ${newFruit.name}`
    })
  }
}

const deleteFruit = (req,res)=> {
  const { id } = req.params;
  const ii = fruits.findIndex(x => x.id === id);
  if (ii >= 0) {
    const [deletedFruit] = fruits.splice(ii, 1);
    res.status(200).json(deletedFruit);
  } else {
    res.status(404).json({
      message: 'Vaisus nerastas'
    })
  }
}

const updateFruit = (req,res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const fruit = fruits.find(x => x.id === id);
  if (fruit) {
    if (name) fruit.name = name;
    if (price) fruit.price = price;
    res.status(200).json(fruit);
  }
  else {
    res.status(404).json({ message: 'Vaisus nerastas' });
  }
}

const replaceFruit =(req,res)=>{
  const { id } = req.params;
  const { name, price } = req.body;
  const fruit = fruits.find(x => x.id === id);
  if (fruit) {
    if (name && price) {
      fruit.name = name;
      fruit.price = price;
      res.status(200).json(fruit);
    } else {
      res.status(400).json({ message: 'Nepakanka duomenų' });
    }
  }
  else {
    res.status(404).json({ message: 'Vaisus nerastas' });
  }
}

module.exports = {
  getFruits,
  getFruit,
  createFruit,
  deleteFruit,
  updateFruit,
  replaceFruit
}