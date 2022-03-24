const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class UserService {
  constructor() {
    /* this.pool = pool;
    this.pool.on('error', (err) => console.error(err)); */
  }

  async find() {
    const consult = await models.User.findAll();
    return consult;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id, {
      include: ['customer'],
    });
    if (!user) {
      throw boom.notFound('user not found');
    }
    return user;
  }

  async create(data) {
    const newUser = await models.User.create(data);
    return newUser;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const consult = await user.update(changes);
    return consult;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
  }
}

module.exports = UserService;
