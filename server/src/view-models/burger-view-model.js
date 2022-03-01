const IngredientViewModel = require('../view-models/ingredient-view-model')
const CategoryViewModel = require('../view-models/categories-view-model')

class BurgerViewModel {
  constructor({_id, title, ingredients, steps, cookingTime, image, category, createdAt, updatedAt}){
    this.id = _id
    this.title = title
    this.image = image
    this.ingredients = ingredients.map(ingredient => new IngredientViewModel(ingredient))
    if(category) this.category = new CategoryViewModel(category)
    this.cookingTime = cookingTime
    this.steps= steps
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = BurgerViewModel