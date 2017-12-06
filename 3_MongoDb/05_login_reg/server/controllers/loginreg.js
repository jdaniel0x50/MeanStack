var mongoose = require('mongoose'),
    bcrypt = require('bcrypt'),
    User = mongoose.model('User');

mongoose.Promise = global.Promise;

function createError(_path, _message) {
    var errors = [];
    var err = {
        path: _path,
        message: _message
    }
    errors.push(err);
    return errors;
}

module.exports = {
    login: function(req, res) {
        var user = User.findOne({ email: req.body.loginEmail}, function(err, user) {
            if (err) {
                console.log(err);
                var errors = createError(
                    "loginEmail",
                    "There was a problem with the database. Please try again later.");
                res.render('index', { errors: errors })
            }
            else {
                if (user != null) {
                    // the user was found in the database
                    bcrypt.compare(req.body.loginPassword, user.passwordHash)
                        .then( result => {
                            if (result) {
                                // password matched
                                req.session.loggedUserId = user._id;
                                res.redirect('/success');
                            }
                            else {
                                // password did not match
                                var errors = createError(
                                    "loginEmail",
                                    "The email and password combination did not match our records.");
                                res.render('index', { errors: errors });
                            }
                        });
                }
                else {
                    // the user was not found in the database
                    var errors = createError(
                        "loginEmail", 
                        "The email address was not found.");
                    res.render('index', { errors: errors });
                }
            }
        })
    },

    register: function(req, res) {
        console.log("POST DATA", req.body);
        // User.on('index', function(err) {
        //     // wait for user model's indexes to finish
        //     assert.ifError(err);
            var user = new User({
                email: req.body.email,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                birthdate: req.body.birthdate,
                password: req.body.password.trim(),
                password_confirm: req.body.password_confirm.trim()
            });
            if (user.password != null) {
                // password is required
                if (user.password == user.password_confirm) {
                    // password and confirmation must be the same
                    if (user.password.length >= 8) {
                        // password length must be at least 8 characters
                        user.save(function (err, result) {
                            if (err) {
                                console.log("There were errors in the submission");
                                console.log(err);
                                if (err.name == "MongoError") {
                                    var errors = createError(
                                        "email",
                                        "This email address is already in use. Please use another address.");
                                }
                                res.render('index', { errors: errors });
                            }
                            else {
                                // registration was successful - login and proceed
                                console.log("successfully added a document!");
                                req.session.loggedUserId = result._id;
                                res.redirect('/success');
                            }
                        });
                    }
                    else {
                        // password length failed
                        var errors = createError(
                            "password",
                            "The password must be at least 8 characters.");
                        res.render('index', { errors: errors });
                    }
                }
                else {
                    // password and confirmation not the same
                    var errors = createError(
                        "password",
                        "The password and confirmation do not match.");
                    res.render('index', { errors: errors });
                }
            }
            else {
                // password is null
                var errors = createError(
                    "password",
                    "Password is required.");
                res.render('index', { errors: errors });
            }
        // })
    },

    logout: function(req, res) {
        if (req.session && req.session.loggedUserId != null) {
            User.findById(req.session.loggedUserId, function (err, user) {
                if (err) {
                    console.log(err);
                }
                else {
                    req.session.destroy();
                    res.redirect('/');
                }
            })
        }
    },

    success: function(req, res) {
        if (req.session && req.session.loggedUserId != null) {
            User.findById(req.session.loggedUserId, function (err, user) {
                if (err) {
                    console.log(err);
                }
                else {
                    res.render('success', { user: user });
                }
            })
        }
    },
}