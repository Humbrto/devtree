import { Router } from 'express';
import { body } from 'express-validator'
import { createAccount, login } from './handlers';
import { handleInputErrors } from './middleware/validation';

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
    handleInputErrors,
    createAccount)

router.post('/auth/login',
    body('email')
        .notEmpty()
        .withMessage('El e-mail no es válido.'),
    body('password')
        .notEmpty()
        .withMessage('El password es obligatorio.'),
    handleInputErrors,
    login
)

export default router;