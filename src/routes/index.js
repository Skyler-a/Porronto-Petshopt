const { Router } = require('express');
const LoginRoutes = require('./login');
const usuarioRoutes = require('./usuario');
const petRoutes = require('./pet');
const adminRoutes = require('./administracao')
const produtoRoutes = require('./produtos')

module.exports = (server) => {
  server.use((req, res, next) => {
    LoginRoutes(server, new Router());
    usuarioRoutes(server, new Router());
    petRoutes(server, new Router());
    adminRoutes(server, new Router());
    produtoRoutes(server, new Router())
    next();
  });
};