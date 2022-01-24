const express = require('express')

const router = express.Router()

//  //get tipo requestas tokiu adresu ----> '/' kai kreipiasi sito adresu issiusk atsakyma
//  server.get('/', (req,res)=> {
//   //send issiust atsakyma reaguojant i get tipo uzklausa
//   console.log(JSON.stringify(req.headers, null, 4 ))
//  res.sendFile('pages/home.html', { root: __dirname})
// })

// '/' nes url jau prasidejo '/api/fruits' index.jsx faile kur panaudotas yra fruitRouter
router.get('/', (req,res)=> { //request handler
  res.status(200).json({
    products: [
      {id:1, name: 'Orange', price: 5.00},
      {id:2, name: 'Lemon', price: 10.00},
      {id:3, name: 'Lime', price: 15.00},
    ]
  })
})

router.post('/', (req,res)=> { //request handler
  //req nuskaito duomenys
  console.log(req.body)
  res.status(200).send(`vaisius sekmingai idetas i prekyba`)
   })

module.exports = router