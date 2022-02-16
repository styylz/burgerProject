const UserModel = require('../models/user-model');
const UserViewModel = require('../view-models/user-view-model');

const getUsers = async (req, res) => {
  const userDocs = await UserModel.find();
  const users = userDocs.map(userDoc => new UserViewModel(userDoc));
  res.status(200).json({ users });
};

const updateUser = async (req, res) => {
  console.log(req.body)
  try {
    const props = Object.entries(req.body)
      .reduce((result, [name, value]) => {
        if (value !== undefined) {
          result[name] = value;
        }
        return result;
      }, {});

    const userDoc = await UserModel.findOneAndUpdate(
      { email: req.user.email },
      props,
      { new: false },
    );

    res.status(200).json({
      message: 'Vartotojas atnaujintas',
      user: new UserViewModel(userDoc)
    })

  } catch (error) {

    res.status(400).json({
      message: 'Error',
    })
  }

}

// const createUser = async (req, res) => {
//   const userDoc = await UserModel(req.body);
//   console.log()
//   try {
//     await userDoc.save();
//     const User = new UserViewModel(userDoc);
//     console.log(User)

//       res.status(201).json(User);
//   } catch (error) {
//       res.status(400).json({
//           message: `Klaida: jau yra toks burgeris yra`,
//       });
//   }
// };

module.exports = {
  getUsers,
  updateUser,
  // createUser
};
