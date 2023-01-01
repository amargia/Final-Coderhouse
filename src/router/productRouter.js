import { Router } from "express";
import auth from "../middlewares/auth.js";

import { getProducts, getProductById, postProduct, updateProductById, deleteProductById } from '../controllers/products.js';

const products = Router();

products.get("/", auth, getProducts);
products.get("/:id", auth, getProductById);
products.post("/", auth, postProduct);
products.put("/:id", auth, updateProductById);
products.delete("/:id", auth, deleteProductById);

export default products;