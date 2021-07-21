const {Router} = require('express');
const { getUsuario, patUsuario, delUsuario,posUsuario,putUsuario } = require('../controllers/user');
const router = Router();


router.get('/', getUsuario);
router.put('/:id', putUsuario);
router.post('/', posUsuario);
router.delete('/', delUsuario);
router.patch('/', patUsuario);

module.exports = router;