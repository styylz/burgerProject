class CategoryViewModel {
  constructor({ _id, title, createdAt, updatedAt}) {
    this.id = _id;
    this.category = title;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = CategoryViewModel;
