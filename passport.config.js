const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const userModel = require("./models/user.model");

mongoose.connect("mongodb://localhost/userdb", { useNewUrlParser: true });

module.exports = function() {
    console.log("LocalStrategy called");
    passport.use(
        new LocalStrategy(
            {
                usernameField: "login",
                passwordField: "password"
            },
            function(login, password, done) {
                console.log("sds");

                userModel.findOne({ login, password }, function(err, user) {
                    if (err) {
                        // console.log("a");
                        return done(err);
                    }
                    if (!user) {
                        console.log("b");
                        return done(null, false, {
                            message: "Incorrect username or password."
                        });
                    }
                    return done(null, user);
                });
            }
        )
    );
};
