const bcript = require('bcryptjs');
const jwt = require('jsonwebtoken');
const LoginRepository = require('../repository/loginRepository');
const authConfig = require('../config/auth.json')

class LoginService {
  async login(email, senha) {
    try {
      const result = await LoginRepository.login(email, senha);
      if (!result) {
        throw new Error('Usuario não encontrado');
      }
      if (!(await bcript.compare(senha, result.senha))) {
        throw new Error('senha incorreta');
      }
      result.senha = undefined;
      const token = jwt.sign({ id: result.id }, authConfig.secret, {
        expiresIn: 86400
      });
      return { result, token };
    } catch (error) {
      throw error;
    }
  }
}
module.exports = new LoginService();