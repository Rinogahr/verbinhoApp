const con = require("../mysql/connection");

module.exports = {
     listMembros : con.query(`SELECT *  FROM departamento `, ( error, results, fields) => {
        if(error){
            console.log("error > ", error);
            return JSON.stringify(error);
        }

        if(results) {
            let membroList = [];

            for(let i of results) {
                membroList.push(i) ;
            }
            //console.log("membroList > ",JSON.parse(JSON.stringify(membroList)));
            // console.log("membroList > ", JSON.stringify(membroList));
            return JSON.parse(JSON.stringify(membroList));
        }
     })
}