const UserModel = require('../models/user-model')

const register = async(req,res) => {
  const {email, name, surname} = req.body
  try {
    const userDoc = await UserModel.create({
      email,
      name,
      surname
    })

    console.log(userDoc)
    res.status(200).json({
      message: 'Registracija pavyko',
      user: userDoc,
    }
    )
  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  }
}

module.exports = {
  register
}