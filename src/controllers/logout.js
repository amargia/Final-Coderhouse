import { getUser } from '../services/usuarios.js'

import { logger } from "../logs/loggers.js";

const getLogout = async (req, res) => {

try {
    const datosUsuario = await getUser(req.user._id); 
    if (datosUsuario) {
    const user = datosUsuario.username;
    req.session.destroy((err) => { 
        if (!err) { 
        // res.render('logout', {user});
        res.status(200).send({message: 'Logout exitoso'});    
        }    
        else { 
        res.status(400).send({error: 'No se pudo hacer logout'});  
        }
    });      
    }
} catch (error) {
    res.status(400).send({error: 'No se pudo hacer logout'});
}
}

export { getLogout };