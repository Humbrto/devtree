import { Router } from 'express';
import { body } from 'express-validator'
import { createAccount } from './handlers';

const router = Router();

/** Autenticacion y Registro */
router.post('/auth/register', 
    body('handle')
        .notEmpty()
        .withMessage('El handle no puede estar vacio.'),
    body('name')
        .notEmpty()
        .withMessage('El nombre no puede estar vacio.'),
    body('email')
        .notEmpty()
        .withMessage('El e-mail no es válido.'),
    body('password')
        .isLength({min: 8})
        .withMessage('El password es muy corto, mínimo 8 caracteres.'),
    createAccount)

export default router;