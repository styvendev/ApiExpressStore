const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class CategoryService {
  constructor() {
    /* this.pool = pool;
    this.pool.on('error', (err) => console.error(err)); */
  }

  async find() {
    const consult = await models.Category.findAll();
    return consult;
  }

  async findOne(id) {
    const category = await models.Category.findByPk(id, {
      include: ['books'],
    });
    if (!category) {
      throw boom.notFound('category not found');
    }
    return category;
  }

  async create(data) {
    const newCategory = await models.Category.create(data);
    return newCategory;
  }

  async update(id, changes) {
    const category = await this.findOne(id);
    const consult = await category.update(changes);
    return consult;
  }

  async delete(id) {
    const category = await this.findOne(id);
    await category.destroy();
    return { id };
  }
}

module.exports = CategoryService;
