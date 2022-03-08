const express = require('express');
const morgan = require('morgan');
const Mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

//Routers
const authRouter = require('./routes/auth-router');
const userRouter = require('./routes/user-router');
const categoryRouter = require('./routes/category-router');
const ingredientRouter = require('./routes/ingredient-router')
const burgerRouter = require('./routes/burger-router')

const server = express();
const {
  SERVER_PORT,
  DB_CONNECTION,
  SERVER_DOMAIN,
  PUBLIC_PATH,
} = process.env;

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// Middlewares
server.use(morgan('tiny'));
server.use(express.static(PUBLIC_PATH));
server.use(cors(corsOptions));
server.use(express.json());
// Response handlers
server.use('/api/auth', authRouter);
server.use('/api/users', userRouter);
//
server.use('/api/categories', categoryRouter)
server.use('/api/ingredients', ingredientRouter)
server.use('/api/burgers', burgerRouter)


server.listen(SERVER_PORT, () => {
  (async () => {
    try {
      await Mongoose.connect(DB_CONNECTION);
    } catch (error) {
      console.error('Nepavyko prisijungti prie duomenų bazės');
    }
  })();
});
