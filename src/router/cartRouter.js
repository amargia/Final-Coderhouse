import { Router } from "express";
import { getCarts, getCartById, putCart, postCart, dltCart, postProdToCart, dltProdFromCart, dltAllFromCart, sendMailOrder } from '../controllers/carts.js';
import auth from "../middlewares/auth.js";

const carts = Router();

carts.get('/', auth, getCarts);
carts.get('/:id', auth, getCartById);
carts.delete('/:id/:idProducto', auth, dltProdFromCart);
carts.delete('/:id', auth, dltAllFromCart)
carts.post('/:id/:idProducto', auth, postProdToCart);

export default carts;