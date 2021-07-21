const {response, request} = require('express');


const getUsuario = (req = request, res = response) => {
    const {q,nombre = 'No Name',apikey} = req.query;
    res.json({
        ok: true,
        msg: 'get API - C',
        q,
        nombre,
        apikey
    }); 
}

const putUsuario = (req, res = response) => {
    const id = req.params.id;
    res.json({
        ok: true,
        msg: 'put API - C',
        id
    });
}

const posUsuario = (req, res = response) => {
    //const body = req.body;
    const {nombre, edad} = req.body;
    res.json({
        ok: true,
        msg: 'post API - C',
        //body
        nombre,
        edad 
    });
}

const patUsuario = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'patch API - C'
    });
}

const delUsuario = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'delete API - C'
    });
}

module.exports = {getUsuario, putUsuario, patUsuario, delUsuario, posUsuario}