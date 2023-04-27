const LoginService = require('../service/loginService');

class LoginController {
  async login(req, res) {
    try {
      const { email, senha } = req.body;
      const result = await LoginService.login(email, senha);
      return res.setHeader('token', result.token).status(200).json({ Message: 'Logado' });
    } catch (error) {
      return res.status(401).json(error);
    }
  }
}
module.exports = new LoginController();