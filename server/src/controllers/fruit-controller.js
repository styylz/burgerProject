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

const deleteFruit = async(req,res)=> {
  const { id } = req.params;
 try {
   const fruitDoc = await FruitModel.findByIdAndDelete(id)
   const fruit = new FruitViewModel(fruitDoc)
   res.status(200).json(fruit)
 } catch (error) {
   console.log(error.message)
   res.status(400).json({
     message: 'vaisius nerastas'
   })
 }
}

const updateFruit = async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  try {
    await FruitModel.findById(id);

    try {
      const fruitDoc = await FruitModel.findByIdAndUpdate(
        id,
        { name, price },
        { new: true }
      );
      const fruit = new FruitViewModel(fruitDoc);
      res.status(200).json(fruit);
    } catch (error) {
      res.status(400).json({ message: 'Blogi parametrai' });
    }

  } catch (error) {
    res.status(404).json({ message: 'Vaisius nerastas' });
  }
};

const replaceFruit = async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  try {
    await FruitModel.findById(id);

    try {
      if (name && price) {
        const fruitDoc = await FruitModel.findByIdAndUpdate(
          { _id: id },
          { name, price },
          {
            new: true,
            runValidators: true,
          }
        );
        const fruit = new FruitViewModel(fruitDoc);
        res.status(200).json(fruit);
      } else {
        throw new Error();
      }
    } catch (error) {
      res.status(400).json({ message: 'Blogi parametrai' });
    }

  } catch (error) {
    res.status(404).json({ message: 'Vaisius nerastas' });
  }
};

module.exports = {
  getFruits,
  getFruit,
  createFruit,
  deleteFruit,
  updateFruit,
  replaceFruit
}