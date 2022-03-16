const { default: faker } = require('@faker-js/faker');

class CategoriesService {
  constructor() {
    this.categories = [
      {
        id: '12',
        name: 'Psicologia',
        format: 'Fisico',
      },
      {
        id: '25',
        name: 'Psicologia',
        format: 'Digital',
      },
    ];
  }

  find() {
    return this.categories;
  }

  findOne(id) {
    return this.categories.find((item) => item.id === id);
  }

  create(data) {
    const newCategory = {
      id: faker.datatype.uuid(),
      ...data,
    };
    this.categories.push(newCategory);
    return newCategory;
  }

  update(id, change) {
    const index = this.categories.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('not found');
    }
    const category = this.categories[index];
    this.categories[index] = {
      ...category,
      ...change,
    };
    return this.categories[index];
  }

  delete(id) {
    const index = this.categories.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('not found');
    }
    this.categories.splice(index, 1);
    return { id };
  }
}

module.exports = CategoriesService;
