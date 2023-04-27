const usuarioSchema = require('../schema/usuarioSchema');

class LoginRepository {
  async login(email) {
    return usuarioSchema.findOne({ email }).select('+senha');
  }
}
module.exports = new LoginRepository();