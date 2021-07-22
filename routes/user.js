const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarRol,validarEmail,validarUsuarioId } = require('../helpers/db-validators');
const { getUsuario, patUsuario, delUsuario, posUsuario, putUsuario } = require('../controllers/usuarios');
const router = Router();


router.get('/', getUsuario);
router.put('/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(validarUsuarioId),
    check('rol').custom(validarRol),
    validarCampos
],putUsuario);
router.post('/', [
    check('nombre', 'El nombre es obligatorio').notEmpty(),
    check('password', 'El password debe ser mayor a 6 caracteres').isLength({ min: 6 }),
    //check('correo', 'El correo no es válido').isEmail(),
    //check('rol','No es un rol válido').isIn(['ADMIN_ROLE','USER_ROLE']),
    check('correo').custom(validarEmail),
    check('rol').custom(validarRol),
    validarCampos
], posUsuario);
router.delete('/:id',[
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(validarUsuarioId),
    validarCampos
], delUsuario);
router.patch('/', patUsuario);

module.exports = router;