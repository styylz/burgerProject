const CategoryModel = require('../models/category-model')
const CategoryViewModel = require('../view-models/categories-view-model')

const getCategories = async (req, res) => {
  const page = req.query._page
  const limit = req.query._limit
  const startIndex = (page - 1) * limit
  const endIndex = page * limit

  const categoryDocs = await CategoryModel.find();
  const categories = categoryDocs.map(Category => new CategoryViewModel(Category));
  console.log('catDocs', categories)

  const result = categories.slice(startIndex, endIndex)
  res.status(200).json({
    data: result,
    dataLength: categories.length,
    categories: categories
  });
}

const createCategory = async (req, res) => {
  const categoryDoc = await CategoryModel(req.body);
  console.log(categoryDoc)
  try {
    await categoryDoc.save();
    const category = new CategoryViewModel(categoryDoc);
    console.log(category)

    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({
      message: `Klaida: jau yra toks filtras`,
    });
  }
};

const getCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const CategoryDoc = await CategoryModel.findById(id);
    const Category = new CategoryViewModel(CategoryDoc);
    res.status(200).json(Category);
  } catch (error) {
    res.status(404).json({
      message: `Elementas kurio id ${id} nerastas`,
    });
  }
};

const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const CategoryDoc = await CategoryModel.findByIdAndDelete(id);
    const Category = new CategoryViewModel(CategoryDoc);
    res.status(200).json(Category);
  }
  catch (error) {
    console.log(error.message)
    res.status(404).json({
      message: 'Produktas nerastas'
    });
  }
};

const updateCategory = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  try {
    await CategoryModel.findById(id);

    try {
      const CategoryDoc = await CategoryModel.findByIdAndUpdate(
        id,
        { title },
        { new: true }
      );
      const Category = new CategoryViewModel(CategoryDoc);
      res.status(200).json(Category);
    } catch (error) {
      res.status(400).json({ message: 'Blogi parametrai' });
    }

  } catch (error) {
    res.status(404).json({ message: 'Produktas nerastas' });
  }
};


module.exports = {
  getCategories,
  createCategory,
  getCategory,
  deleteCategory,
  updateCategory,
};
