//  Inject modules
var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');

var sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};


  /// register new user
module.exports.register = function(req, res) {

    var user = new User();

    user.role = req.body.role;
    user.name = req.body.name;
    user.email = req.body.email;
    user.phoneNumber = req.body.phoneNumber;


    user.setPassword(req.body.password);

    user.save(function(err) {
        var token;
        token = user.generateJwt();
        res.status(200);
        res.json({
            "token" : token
        });
    });

};


// login  existing user
module.exports.login = function(req, res) {
    passport.authenticate('local', function(err, user, info){
        var token;

        // If Passport throws/catches an error
        if (err) {
            res.status(404).json(err);
            return;
        }

        // If a user is found
        if(user){
            token = user.generateJwt();
            res.status(200);
            res.json({
                "token" : token
            });
        } else {
            // If user is not found
            res.status(401).json(info);
        }
    })(req, res);

};