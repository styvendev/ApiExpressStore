const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class CustomerBookService {
  constructor() {
    /* this.pool = pool;
    this.pool.on('error', (err) => console.error(err)); */
  }

  async find() {
    const consult = await models.CustomerBook.findAll();
    return consult;
  }

  async findOne(id) {
    const relation = await models.CustomerBook.findByPk(id, {
      include: [
        'customer',
        'book',
        {
          association: 'customer',
          include: ['user', 'document'],
        },
        {
          association: 'book',
          include: ['category'],
        },
      ],
    });
    if (!relation) {
      throw boom.notFound('relation not found');
    }
    return relation;
  }

  async create(data) {
    const newRelation = await models.CustomerBook.create(data);
    return newRelation;
  }

  async update(id, changes) {
    const relation = await this.findOne(id);
    const consult = await relation.update(changes);
    return consult;
  }

  async delete(id) {
    const relation = await this.findOne(id);
    await relation.destroy();
    return { id };
  }
}

module.exports = CustomerBookService;
