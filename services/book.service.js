const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class BookService {
  constructor() {
    /* this.pool = pool;
    this.pool.on('error', (err) => console.error(err)); */
  }

  async find() {
    const consult = await models.Book.findAll({
      include: ['category'],
    });
    return consult;
  }

  async findOne(id) {
    const book = await models.Book.findByPk(id, {
      include: [
        'category',
        {
          association: 'relation',
          include: ['customer'],
        },
      ],
    });
    if (!book) {
      throw boom.notFound('book not found');
    }
    return book;
  }

  async create(data) {
    const newBook = await models.Book.create(data, {
      include: ['relation'],
    });
    return newBook;
  }

  async update(id, changes) {
    const book = await this.findOne(id);
    const consult = await book.update(changes);
    return consult;
  }

  async delete(id) {
    const book = await this.findOne(id);
    await book.destroy();
    return { id };
  }
}

module.exports = BookService;
