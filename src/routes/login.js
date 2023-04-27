const LoginController = require('../app/controller/loginController.js');
//const validarLogin = require('../app/middleware/login/validarLogin')

module.exports = (server, routes, prefix = '/porronto-petshop/api/login') => {
  routes.post('/', LoginController.login);

  server.use(prefix, routes);
};