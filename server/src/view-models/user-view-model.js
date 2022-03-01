const BurgerViewModel = require('./burger-view-model')

class UserViewModel {
  constructor({ _id, email, role, name, surname, img, favorites, createdAt, updatedAt }) {
    this.id = _id;
    this.email = email;
    this.role = role;
    this.name = name;
    this.surname = surname;
    this.img = img
    this.favorites = favorites.map(fav => new BurgerViewModel(fav))
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = UserViewModel;
