import { carritoDao } from '../contenedores/daos/index.js';
import { productosDao } from '../contenedores/daos/index.js';

const getAllCarts = async () => {
    const data = await carritoDao.list();
    return data;
}

const getCart = async (id) => {
    const data = await carritoDao.getById(id);
    return data;
}

const saveCart = async (userId) => {
    const data = await carritoDao.save(userId);
    return data;
}

const updateCart = async (id, userId) => {
    const data = await carritoDao.changeById(id, userId);
    return data;
}

const deleteCart = async (id) => {
    const data = await carritoDao.deleteById(id);
    return data;
}

const saveProdToCart = async (idCarrito, idProducto) => {
    const producto = await productosDao.getProductById(idProducto)
    const data = await carritoDao.addProduct(idCarrito, producto);
    return data;
}

const deleteProdFromCart = async (idCarrito, idProducto) => {
    const data = await carritoDao.deleteProduct(idCarrito, idProducto);
    return data;
}
  
const deleteAllFromCart = async (idCarrito) => {
    const data = await carritoDao.deleteAllProducts(idCarrito);
    return data;
}

export { getAllCarts, getCart, saveCart, updateCart, deleteCart, saveProdToCart, deleteProdFromCart, deleteAllFromCart };