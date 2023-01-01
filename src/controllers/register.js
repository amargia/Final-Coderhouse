import { saveUser } from "../services/usuarios.js";
import { logger } from "../logs/loggers.js";
import { save } from "../utils/contenedor.js";
import { saveCart } from "../services/carritos.js";

const getRegister = (req, res) => {
    res.render('register');
}

const postRegister = async (req, res) => {
    // const file = req.file;
    // const image = file.filename;
    
    const { name, username, age, address, email, phone, password } = req.body

    try {
      const user = await saveUser({ name, username, age, address, email, phone, password });
      if (!user) {
        res.status(400).send({message: 'El usuario ya existe'});
      } else {
        let userId = user._id;
        await saveCart(userId, username, email, address);      
        res.status(200).send(user);
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({message: 'Error al registrar el usuario'});
    }
}

export { getRegister, postRegister };