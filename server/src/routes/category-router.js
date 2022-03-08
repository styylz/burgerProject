const express = require('express');
const {
  getCategories,
  createCategory,
  getCategory,
  deleteCategory,
  updateCategory,
  getPaginatedCategories,
} = require('../controllers/category-controller')

const router = express.Router();

// middlewares

router.get('/', getCategories);

router.get('/paginate', getPaginatedCategories);

router.post('/', createCategory)

router.get('/:id', getCategory)

router.delete('/:id', deleteCategory)

router.patch('/:id', updateCategory);


module.exports = router;
