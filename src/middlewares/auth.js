const auth = (req, res, next) => {
    if (req.isAuthenticated(req)) {
        return next();
    } else {
        // res.render('login');
        res.status(401).send({message: 'Usuario o contraseña incorrectos'});
    }
}

export default auth;