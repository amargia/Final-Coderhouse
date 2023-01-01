import { getUser, getAllUsers } from "../services/usuarios.js";

const getUsuario = async (req, res) => {
    const userData = await getUser(req.user._id);
    // res.render('user', { userData });
    res.status(200).send(userData);
}

const getAllUsuarios = async (req, res) => {
    const users = await getAllUsers();
    // res.render('users', { users });
    res.status(200).send(users);
}

    
export { getUsuario, getAllUsuarios};