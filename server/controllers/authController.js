const models = require('../models/userModels');
const axios = require('axios');
require('dotenv').config();

const authController = {};
const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');

const validEmail = (email) => {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match(mailformat)) {
    return true;
  }
  return false;
};

authController.signup = (req, res, next) => {
  const { email, password, verifiedPassword } = req.body;

  if (!email || !validEmail(email)) next('Please enter a valid email.');
  if (!password || !verifiedPassword) next('Please enter a password');
  if (password !== verifiedPassword) next('Passwords do not match.');

  const hashPassword = async () => {
    const hashedPassword = await bcrypt.hash(password, SALT_WORK_FACTOR);
    try {
      const newUser = models.User.create({
        email: email,
        password: hashedPassword,
      });
      await newUser;
      res.locals.success = true;
      next();
    } catch (error) {
      next({
        log: `authController.signup: Error: ${error}`,
        message: {
          err: 'This email already exists.',
        },
      });
    }
  };

  hashPassword();
};

authController.login = (req, res, next) => {
  const { email, password } = req.body;
  res.locals.success = false;

  models.User.findOne({ email: email }, (err, data) => {
    // console.log('data: ', data);
    // if (!data[0]) {
    //   return res.redirect('/signup');
    // }
    // if (err)
    //   return next('Error in authController.login: ' + JSON.stringify(err));
    // if (!(req.body.password === data[0].password)) {
    //   return res.redirect('/signup');
    // }
    console.log('data: ', data);
    if (data !== undefined) {
      bcrypt.compare(password, data.password, (err, result) => {
        if (result === true) {
          res.locals.success = true;
          return next();
        }
        if (err) {
          return next(err);
        }
      });
    }
  });
};

authController.clearUserDB = (req, res, next) => {
  // http://localhost:3000/api/clearUserDB
  models.User.deleteMany()
    .then(() => {
      res.locals.deleted = 'User DB Cleared';
      next();
    })
    .catch((err) => {
      console.log('macros controller error: ', err);
    });
};

module.exports = authController;
