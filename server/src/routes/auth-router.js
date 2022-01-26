const express = require('express');
const {
  register,
  login,
} = require('../controllers/auth-controller');
const authConfigureMiddleware = require('../middlewares/auth-configure-middleware');


const router = express.Router();
router.use(authConfigureMiddleware)

router.post('/register', register);

router.post('/login', login);

module.exports = router;