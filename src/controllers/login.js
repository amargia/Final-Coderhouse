import { logger } from '../logs/loggers.js';

const getLogin = (req, res) => {
    res.render('login');
}

const postLogin = (req, res) => {
    logger.info("Inicio de sesión correcto");
    // res.redirect('/');
    res.status(200).send({message: 'Inicio de sesión correcto'});
}

export { getLogin, postLogin };