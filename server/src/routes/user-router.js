const express = require('express');
const {
  getUsers
}= require('../controllers/user-controller')
const authMiddleware = require('../middlewares/auth-middleware')
const adminMiddleware = require('../middlewares/admin-middleware')
const router = express.Router(authMiddleware);

router.use(authMiddleware)

router.get('/', adminMiddleware, getUsers)



module.exports = router