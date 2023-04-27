const ProdutosController = require('../app/controller/produtoController');

module.exports = (server, routes, prefix = '/porronto-petshop/api/produto') => {
  routes.post('/cadastro', ProdutosController.cadastrarProduto);
  routes.get('/listar/:id', ProdutosController.listarProdutoPorId)
  routes.get('/listar', ProdutosController.listarProduto)


  server.use(prefix, routes);
};