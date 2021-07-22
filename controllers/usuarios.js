const { response, request } = require('express');
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');

const getUsuario = async (req = request, res = response) => {
    //const { q, nombre = 'No Name', apikey } = req.query;
    const status = {estado:true};
    const {limite = 5, desde = 0}  = req.query;
    // const usuarios = await Usuario.find(status)
    // .skip(Number(desde))
    // .limit(Number(limite));

    //const total = await Usuario.countDocuments(status);

    const [total, usuarios] = await Promise.all([
        Usuario.countDocuments(status),
        Usuario.find(status)
        .skip(Number(desde))
        .limit(Number(limite))
    ])
    res.json({
        total,
        usuarios
    });
}

const putUsuario = async (req, res = response) => {
    const { id } = req.params;
    const { _id, password, google, correo, ...resto } = req.body;
    //validar contra BD
    if (password) {
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password, salt)
    }
    const usuario = await Usuario.findByIdAndUpdate(id, resto);

    res.json({
        msg: 'put API - C',
        usuario
    });
}

const posUsuario = async (req, res = response) => {
    //const body = req.body;

    const { nombre, correo, password, rol } = req.body;
    const usuario = new Usuario({ nombre, correo, password, rol });
    //verificar si correo existe

    //encriptar pass
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt)
    //guardar
    await usuario.save();

    res.json(usuario);
}

const patUsuario = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'patch API - C'
    });
}

const delUsuario = async(req, res = response) => {
    const {id} = req.params;
    //FISICAMENTE
    //const usuario = await Usuario.findByIdAndDelete(id);
    const usuario = await Usuario.findByIdAndUpdate(id,{estado:false});
    res.json({
        usuario
    });
}



module.exports = { getUsuario, putUsuario, patUsuario, delUsuario, posUsuario }