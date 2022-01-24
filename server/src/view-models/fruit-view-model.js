class FruitViewModel {
  constructor (fruitModel) {
    this.id = fruitModel.id,
    this.name = fruitModel.name,
    this.price = fruitModel.price,
    this.createdAt= fruitModel.createdAt,
    this.updatedAt = fruitModel.updatedAt
  }
}

module.exports = FruitViewModel