const express = require('express');
const {
    getIngredients,
    createIngredient,
    getIngredient,
    updateIngredient,
    deleteIngredient,
    replaceIngredient
} = require('../controllers/ingredient-controller');

const router = express.Router();

router.get('/', getIngredients);

router.post('/', createIngredient);

router.get('/:id', getIngredient);

router.delete('/:id', deleteIngredient);

router.patch('/:id', updateIngredient)

router.put('/:id', replaceIngredient) //?

module.exports = router;