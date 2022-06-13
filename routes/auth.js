const { Router } = require('express');
const {check} = require('express-validator');
const { 
    crearUsuario,
    loginUsuario,
    renewToken 
} = require('../controllers/auth');

const router = Router();


//crear un nuevo usuario
router.post('/new',[
    check('name', 'El nombre de usuario es obligatorio y requiere min 5 caracteres').not().isEmpty().isLength({min: 5}),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio y requiere min 6 caracteres').isLength({min: 6}),
], crearUsuario );

//Login de usuario
router.post('/', [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio y requiere min 6 caracteres').isLength({min: 6}),
], loginUsuario);

//Validar y revalidar usuario
router.get('/renew', renewToken);


module.exports = router;