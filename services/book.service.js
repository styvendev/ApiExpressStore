/* const boom = require('@hapi/boom'); */
const pool = require('../libs/conection.pool');

class BookService {
  constructor() {
    this.pool = pool;
    this.pool.on('error', (err) => console.error(err));
  }

  async find() {
    const query = 'select * from baphystore.book';
    const consult = await this.pool.query(query);
    return consult.rows;
  }

  async findOne(id) {
    return { id };
  }

  async create(data) {
    return data;
  }

  async update(id, changes) {
    return { id, changes };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = BookService;
