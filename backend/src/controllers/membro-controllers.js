const  listMembros  = require("../models/membro-models");
const { json } = require("express");

module.exports = {
    index: ( req, res ) => { //o index vai trazer a listagem  de todos os membros
        console.log("listMembros > ",listMembros.qury);
        // return res.json(listMembros).status(200);
    }
}