const express = require('express');
const verbinhoRouters = express.Router();
const usuarioControllers = require("../controllers/usuario-list.controlers");


verbinhoRouters.get('/', usuarioControllers.lisTUsuario);


module.exports = verbinhoRouters;