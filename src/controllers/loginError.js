import { logger } from '../logs/loggers.js';

const getLoginError = (req, res) => {
    res.status(401).send({message: 'Usuario o contraseña incorrectos'});
    // res.status(401).render('loginError');
}

export { getLoginError }