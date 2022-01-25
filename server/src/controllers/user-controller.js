const getUsers = async(req,res) => {
  res.status(200).json({
    message: 'hello'
  })
}

module.exports = {
  getUsers
}