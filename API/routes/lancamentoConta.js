const express = require('express');
const router = express.Router();
const data = require('../db/lancamento-conta-legado.json');

router.get('/',(req, res, next) =>{
    res.status(200).send({
        mensagem: "A conexão foi efetuada com sucesso!"
    });
});

router.get('/consulta',(req, res, next) =>{
    res.status(200).send({
        data: data
    });
});
 
module.exports = router;
