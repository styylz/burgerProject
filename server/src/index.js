const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

const server = express();
const {SERVER_PORT} = process.env;

server.use(morgan('tiny'))

 //get tipo requestas tokiu adresu ----> '/' kai kreipiasi sito adresu issiusk atsakyma
 server.get('/', (req,res)=> {
   //send issiust atsakyma reaguojant i get tipo uzklausa
   console.log(JSON.stringify(req.headers, null, 4 ))
  res.sendFile('pages/home.html', { root: __dirname})
 })

 server.get('/api/fruits', (req,res)=> { //request handler
   res.status(200).json({
     products: [
       {id:1, name: 'Orange', price: 5.00},
       {id:2, name: 'Lemon', price: 10.00},
       {id:3, name: 'Lime', price: 15.00},
     ]
   })
 })

 server.post('/api/fruits', (req,res)=> { //request handler
//req nuskaito duomenys
console.log(req)
res.status(200).send(`hi`)
 })

 server.listen(SERVER_PORT, ()=>{
   console.log(`puslapisveikia nat http://localhost:${SERVER_PORT}`);
 })