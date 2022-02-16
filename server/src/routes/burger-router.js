const express = require('express')
const {
  getBurgers, createBurger
} = require('../controllers/burger-controller')

const router = express.Router()

router.get('/', getBurgers)

router.post('/', createBurger)

module.exports = router