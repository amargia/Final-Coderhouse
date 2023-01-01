import { getUser } from "../services/usuarios.js";

const getHome = async (req, res) => {
    const user = await getUser(req.user._id);

    const userData = {
        _id: user._id,
        username: user.username,
        email: user.email,
        telefono: user.phone,
        direccion: user.address,
        edad: user.age,
        image: user.image
    }

    res.render('home', { userData });
}

export { getHome };