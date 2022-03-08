const express = require('express')
const {
  getBurgers, createBurger, getBurger, getBurgersPaginated
} = require('../controllers/burger-controller')
const { uploadSingleMiddleware } = require('../middlewares/upload-middleware')

const router = express.Router()

router.get('/', getBurgers)

router.get('/paginated', getBurgersPaginated)

router.get('/:id', getBurger);

router.post('/', uploadSingleMiddleware('image'), createBurger)

module.exports = router