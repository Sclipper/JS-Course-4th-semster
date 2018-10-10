require("../dbSetup");
const Login = require('../model/login');
const fetch = require('node-fetch');

function login(req, res) {


}

function getAllLogins(req, res, next) {

    Login.find(function(err, logins) {
        if (err) return next(err);

        res.json(logins);
    });
}

module.exports = {
    login,
    getAllLogins
};