const AdministracaoController = require('../app/controller/administracaoController');

module.exports = (server, routes, prefix = '/porronto-petshop/api/admin') => {
  routes.post('/cadastro', AdministracaoController.cadastrarFuncionario);
  routes.get('/listar/:id', AdministracaoController.findAdminById)
  server.use(prefix, routes);
};