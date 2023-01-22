const { usuarioList } = require("../models/usuario-list.model");

module.exports = {
    lisTUsuario: ( req, res ) => {
        res.status('200').send(usuarioList);
    }
}