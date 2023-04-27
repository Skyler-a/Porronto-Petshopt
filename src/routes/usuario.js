const UsuarioController = require('../app/controller/usuarioController.js');

module.exports = (server, routes, prefix = '/porronto-petshop/api/user') => {
  routes.post('/cadastro', UsuarioController.cadastrarUsuario);
  routes.get('/find', UsuarioController.findUsuario);
  routes.get('/find/:id', UsuarioController.findUsuarioById);

  server.use(prefix, routes);
};