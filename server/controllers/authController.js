const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {

  const token = jwt.sign({email: req.body.email}, config.secret)

  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    confirmationCode: token
  });
exports.signup = (req, res) => {

  const token = jwt.sign({email: req.body.email}, config.secret)

  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    confirmationCode: token
  });
  if (user.status != 'Active') {
  return res.status(401).send({
    message: 'Pending Account. Please Verify Your Email!',
  });
}

const characters =
  '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
let token = '';
for (let i = 0; i < 25; i++) {
  token += characters[Math.floor(Math.random() * characters.length)];
}
