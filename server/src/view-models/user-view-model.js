const ImageViewModel = require('./image-view-model');
const BurgerViewModel = require('./burger-view-model')

class UserViewModel {
  constructor({ _id, email, role, name, surname, mainImg, favorite, createdAt, updatedAt }) {
    this.id = _id;
    this.email = email;
    this.role = role;
    this.name = name;
    if (mainImg) {
      this.mainImg = new ImageViewModel(mainImg);
    }
    this.surname = surname;
    this.favorite = favorite.map(fav => new BurgerViewModel(fav))
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = UserViewModel;
