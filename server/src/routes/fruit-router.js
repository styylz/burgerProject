const express = require('express');
const {getFruits,
  getFruit,
  createFruit,
  deleteFruit,
  updateFruit,
  replaceFruit} = require('../controllers/fruit-controller')
const router = express.Router();

// REST API standard

// GET    '/fruits'     -> visus vaisius
router.get('/', getFruits);

// POST   '/fruits/'    -> sukurti vieną vaisių
router.post('/', createFruit);

// GET    '/fruits/:id' -> gauti vieną vaisių
router.get('/:id', getFruit);

// DELETE '/fruits/:id' -> ištrinti vieną vaisių
router.delete('/:id', deleteFruit);

// PATCH  '/fruits/:id' -> ATNAUJINTI vieną vaisių
router.patch('/:id', updateFruit);

// PUT    '/fruits/:id' -> Perrašo vieną vaisių
router.put('/:id', replaceFruit);

module.exports = router;
