const { Router } = require('express');
const LoginRoutes = require('./login');
const usuarioRoutes = require('./usuario');
const petRoutes = require('./pet');

module.exports = (server) => {
  server.use((req, res, next) => {
    LoginRoutes(server, new Router());
    usuarioRoutes(server, new Router());
    petRoutes(server, new Router());
    next();
  });
};