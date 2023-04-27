const PetController = require('../app/controller/petController.js');

module.exports = (server, routes, prefix = '/porronto-petshop/api/pet') => {
  routes.post('/cadastro', PetController.cadastrarPet);
  routes.get('/listar/:id_Usuario', PetController.listarPetsCadastradosPorUsuario);
  
  server.use(prefix, routes);
};