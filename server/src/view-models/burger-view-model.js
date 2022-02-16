const IngredientViewModel = require('../view-models/ingredient-view-model')
const CategoryViewModel = require('../view-models/categories-view-model')
const UserViewModel = require('../view-models/user-view-model')

class BurgerViewModel {
  constructor({_id, title, userId, ingredientId, categoriesId, rating, steps, cookingTime}){
    this.id = _id
    this.title = title
    //FIXME userViewModel isn't working
    this.userId = userId
    this.ingredientId = ingredientId.map(ingredient => new IngredientViewModel(ingredient))
    this.categoriesId = categoriesId.map(category => new CategoryViewModel(category))
    this.cookingTime = cookingTime
    this.steps= steps
    this.rating = rating
  }
}

module.exports = BurgerViewModel