import { Router } from "express";
const router = Router();

//routers
import carts from "./cartRouter.js";
import products from "./productRouter.js";
import info from "./infoRouter.js";
import users from "./userRouter.js";
import home from "./homeRouter.js";
import auth from "./authRouter.js";

//middlewares
router.use("/api/carrito", carts);
router.use("/api/productos", products);
router.use("/info", info);
router.use("/user", users);
router.use("/auth", auth);
router.use("/", home);

export default router;