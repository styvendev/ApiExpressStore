const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class DocumentService {
  constructor() {
    /* this.pool = pool;
    this.pool.on('error', (err) => console.error(err)); */
  }

  async find() {
    const consult = await models.Document.findAll();
    return consult;
  }

  async findOne(id) {
    const document = await models.Document.findByPk(id, {
      include: [
        {
          association: 'customer',
          include: ['user'],
        },
      ],
    });
    if (!document) {
      throw boom.notFound('document not found');
    }
    return document;
  }

  async create(data) {
    const newDocument = await models.Document.create(data);
    return newDocument;
  }

  async update(id, changes) {
    const document = await this.findOne(id);
    const consult = await document.update(changes);
    return consult;
  }

  async delete(id) {
    const document = await this.findOne(id);
    await document.destroy();
    return { id };
  }
}

module.exports = DocumentService;
