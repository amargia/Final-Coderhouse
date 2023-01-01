import { getAllCarts, getCart, saveCart, updateCart, deleteCart, saveProdToCart, deleteProdFromCart, deleteAllFromCart } from '../services/carritos.js';
import { sendMail, sendMailPurchase, notificacion } from '../middlewares/nodemailer.js';

const getCarts = async (req, res) => {
    try {
        const carts = await getAllCarts();
        // res.render('cart', {carts});
        res.status(200).send(carts);
    } catch (error) {
        res.status(500).send('No se encontraron carritos', error)
    }
}

const getCartById = async (req, res) => {
    try{
        const { id } = req.params;
        const cart = await getCart(id);
        // res.render('cart', {cart, userData});
        res.status(200).send(cart);
      } catch (error) {
        res.status(500).send('No se encontró el carrito', error);
      }
};

const putCart = async (req, res) => {
    try{
        const { id } = req.params;
        const { userId } = req.body.userId;
        const cart = await updateCart(id, userId);
        res.status(200).send(cart);
      } catch (error) {
        res.status(500).send('No se encontró el carrito', error);
      }
}

const postCart = async (req, res) => {
    try{
        const { userId, username, email, address } = req.body;
        const cart = await saveCart(userId, username, email, address);
        res.status(201).send(cart);
      } catch (error) {
        res.status(500).send('No se encontró el carrito', error);
      }
}

const dltCart = async (req, res) => {
    try{
        const { id } = req.params;
        const cart = await deleteCart(id);
        res.status(200).send(cart);
      } catch (error) {
        res.status(500).send('No se eliminó el carrito', error);
      }
}

const postProdToCart = async (req, res) => {
    try{
        const { id, idProducto } = req.params;
        const cart = await saveProdToCart(id, idProducto);
        res.status(201).send(cart);
      } catch (error) {
        res.status(500).send('No se encontró el producto del carrito', error);
      }
}

const dltProdFromCart = async (req, res) => {
    try{
        const { id, idProducto } = req.params;
        const cart = await deleteProdFromCart(id, idProducto);
        res.status(200).send(cart);
      } catch (error) {
        res.status(500).send('No se eliminó el producto del carrito', error);
      }
}

const dltAllFromCart = async (req, res) => {
    try{
        const { id } = req.params;
        const cart = await deleteAllFromCart(id);
        res.status(200).send(cart);
      } catch (error) {
        res.status(500).send('No se eliminó el producto del carrito', error);
      }
}

const sendMailOrder = async (req, res) => {
    try{
        const { email, username, address } = req.body;
        const mail = await sendMail(email, username, address);
        res.status(201).send(mail);
      } catch (error) {
        res.status(500).send('No se envió el mail', error);
      }
}


export { getCarts, getCartById, putCart, postCart, dltCart, postProdToCart, dltProdFromCart, dltAllFromCart, sendMailOrder };