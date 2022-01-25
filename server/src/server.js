const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose')
require('dotenv').config();
const fruitRouter = require('./routes/fruit-router')
const authRouter = require('./routes/auth-router')

const server = express();
const {SERVER_PORT, DB_CONNECTION} = process.env;

//Middlewares
server.use(morgan('tiny'))
server.use(express.static('public'))
server.use(express.json())


//Response handlers
//Kuomet url prasideda '/api/fruits' naudok fruitRouteri
server.use('/api/fruits',fruitRouter)
server.use('/api/auth', authRouter)

 server.listen(SERVER_PORT, ()=>{
   (async () => {
   try {
     await mongoose.connect(DB_CONNECTION)
     console.error('Pavyko prisijungti')

   } catch (error) {
     console.error('nepavyko prisijungti')
   }
   console.log(`puslapis veikia ant http://localhost:${SERVER_PORT}`);
 })();
 });