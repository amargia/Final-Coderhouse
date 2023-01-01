import { Router } from "express";
import { getUsuario, getAllUsuarios } from "../controllers/user.js";

const user = Router();

user.get("/", getUsuario);
user.get("/all", getAllUsuarios);

export default user;