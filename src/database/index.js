const mongoose = require('mongoose');

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    return mongoose.connect('mongodb+srv://maratona:senha123@porrontopetshop.advth7v.mongodb.net/?retryWrites=true&w=majority');
  }
}
module.exports = new Database().connect();