/* const boom = require('@hapi/boom'); */
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
    return { id };
  }

  async create(data) {
    return { data };
  }

  async update(id, changes) {
    return { id, changes };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = CategoryService;
