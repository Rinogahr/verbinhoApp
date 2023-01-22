const con = require("../mysql/connection");
const { json } = require("express");

var  usuarioList =

    con.query(`SELECT * FROM membro`, async (error, res) => {
        if(error){
          return res.send(error); //status("210").json(error);
        }else{
            res.send();
        }

    });



module.exports = {usuarioList}