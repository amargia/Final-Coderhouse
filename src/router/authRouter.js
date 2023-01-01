import { Router } from "express";
import { postLogin } from '../controllers/login.js';
import { postRegister } from '../controllers/register.js';
import { getLogout } from '../controllers/logout.js';
import { getLoginError } from "../controllers/loginError.js";

import { upload } from "../middlewares/multer.js";

const auth = Router();
import passport from '../middlewares/passport.js';

auth.post('/login', passport.authenticate('local'), postLogin);
auth.post('/register', upload.single('avatar'), postRegister);
auth.get('/logout', getLogout);
auth.get('/loginError', getLoginError);

export default auth;