import { getAllProducts, getProduct, saveProduct, updateProduct, deleteProduct } from '../services/productos.js';

const getProducts = async (req, res) => {
    try {
        const products = await getAllProducts();
        // res.render('products', {products});
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send('Error al obtener los productos', error);
    }
}

const getProductById = async (req, res) => {
    try {
        const product = await getProduct(req.params.id);
        res.status(200).send(product);
    } catch (error) {
        res.status(500).send('Error al obtener el producto', error);
    }
}

const postProduct = async (req, res) => {
    const { name, price, description, code, thumbnail, stock } = req.body;

    const product = { name, price, description, code, thumbnail, stock }

    try {
        await saveProduct(product);
        // res.redirect('/');
        res.status(201).send(product);
    }
    catch (err) {
        res.status(500).send(err, 'Error al guardar el producto');
    }
}

const updateProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, code, price, thumbnail, stock } = req.body;
        const product = await updateProduct(id, { name, description, code, price, thumbnail, stock });
        res.status(200).send(product);
    } catch (error) {
        res.status(500).send('Error al actualizar el producto', error);
    }
}

const deleteProductById = async (req, res) => {
    try {
        const product = await deleteProduct(req.params._id);
        res.status(200).send(product);
    } catch (error) {
        res.status(500).send('Error al eliminar el producto', error);
    }
}

export { getProducts, getProductById, postProduct, updateProductById, deleteProductById };