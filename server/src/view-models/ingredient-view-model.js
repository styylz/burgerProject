class IngredientViewModel {
    constructor({_id, title, amount, createdAt, updatedAt}){
        this.id = _id,
        this.title = title,
        this.amount = amount,
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}

module.exports = IngredientViewModel;