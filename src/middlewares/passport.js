import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { User } from "../contenedores/models/User.js";
import { usuariosDao } from "../contenedores/daos/index.js";
import bcrypt from "bcrypt";

passport.use(
    new LocalStrategy({usernameField: 'email'},async (email, password, done) => {
        const userExist = await usuariosDao.findByEmail(email);
        if (!userExist) return done(null, false);
        bcrypt.compare(password, userExist.password, (err, isMatch) => {
          if (err) console.log(err);
          if (isMatch) {        
            return done(null, userExist);
          }
          return done(null, false);
        });
    })
);

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
    const user = await usuariosDao.findById(id);
    return done(null, user);
});

export default passport;