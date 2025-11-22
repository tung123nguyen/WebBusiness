import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
const configPassportLocal = () => {
  passport.use(
    new LocalStrategy(function verify(username, password, cb) {
      db.get("SELECT * FROM users WHERE username = ?", [username], function (err, row) {
        if (err) {
          return cb(err);
        }
        if (!row) {
          return cb(null, false, { message: "Incorrect username or password." });
        }

        bcrypt.compare(password, row.hashed_password, function (err, result) {
          if (err) {
            return cb(err);
          }
          if (!result) {
            return cb(null, false, { message: "Incorrect username or password." });
          }
          return cb(null, row);
        });
      });
    })
  );
};

export default configPassportLocal;
