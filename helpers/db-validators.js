const Role = require('../models/role');
const Usuario = require('../models/usuario');

const validarRol = async (rol = '') => {
    const existeRol = await Role.findOne({ rol });
    if (!existeRol) {
        throw new Error(`El rol ${rol} no está registrado en la BD`);
    }
}

const validarEmail = async (correo = '') => {
    const existEmail = await Usuario.findOne({ correo });
    if (existEmail) {
        throw new Error(`El correo ${correo} ya está registrado en la BD`);
    }
}

const validarUsuarioId = async (id = '') => {
    const existUsuario = await Usuario.findById(id);
    if (!existUsuario) {
        throw new Error(`El id ${id} No existe en la BD`);
    }
}




module.exports = { validarRol, validarEmail,validarUsuarioId };