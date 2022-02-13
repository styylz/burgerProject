const CategoryModel = require('../models/category-model')
const CategoryViewModel = require('../view-models/categories-view-model')

const getCategories = async (req,res)=> {
  const CategoryDocs = await CategoryModel.find();
  console.log(CategoryDocs);
  const Categories = CategoryDocs.map(Category => new CategoryViewModel(Category));
  res.status(200).json({ Categories });
}

const createCategory = async (req, res) => {
  const CategoryDoc = await CategoryModel(req.body);
  console.log(CategoryDoc)
  try {
      await CategoryDoc.save();
      const Category = new CategoryViewModel(CategoryDoc);
  console.log(Category)

      res.status(201).json(Category);
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

const replaceCategory = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  try {
      await CategoryModel.findById(id);

      try {
          const CategoryDoc = await CategoryModel.findOneAndReplace(
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
