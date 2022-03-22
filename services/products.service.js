const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

const pool = require('../libs/conection.pool');

class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
    this.pool = pool;
    this.pool.on('error', (err) => console.error(err));
  }

  generate() {
    const limit = 50;
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.datatype.number(),
        title: faker.name.title(),
        author: faker.name.findName(),
      });
    }
  }

  async find() {
    const query = 'select * from baphystore.book';
    const consult = await this.pool.query(query);
    return consult.rows;
  }

  async findOne(id) {
    const product = this.products.find((item) => item.id == id);
    if (!product) {
      throw boom.notFound();
    }
    return product;
  }

  async create(data) {
    const newProduct = {
      id: faker.datatype.number(),
      ...data,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  async update(id, changes) {
    const index = this.products.findIndex((item) => item.id == id);
    if (index === -1) {
      throw boom.notFound();
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes,
    };
    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex((item) => item.id == id);
    if (index === -1) {
      throw boom.notFound();
    }
    this.products.splice(index, 1);
    return { id };
  }
}

module.exports = ProductsService;
