const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class CustomerService {
  constructor() {
    /* this.pool = pool;
    this.pool.on('error', (err) => console.error(err)); */
  }

  async find() {
    const consult = await models.Customer.findAll({
      include: ['user', 'document'],
    });
    return consult;
  }

  async findOne(id) {
    const customer = await models.Customer.findByPk(id, {
      include: ['user', 'document'],
    });
    if (!customer) {
      throw boom.notFound('customer not found');
    }
    return customer;
  }

  async create(data) {
    const newCustomer = await models.Customer.create(data, {
      include: ['user', 'document'],
    });
    return newCustomer;
  }

  async update(id, changes) {
    const customer = await this.findOne(id);
    const consult = await customer.update(changes);
    return consult;
  }

  async delete(id) {
    const customer = await this.findOne(id);
    await customer.destroy();
    return { id };
  }
}

module.exports = CustomerService;
