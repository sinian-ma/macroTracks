const models = require('../models/userModels');
const axios = require('axios');
require('dotenv').config();

const authController = {};
const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');

authController.signup = (req, res, next) => {
  const { email, password } = req.body;

  bcrypt.hash(password, SALT_WORK_FACTOR).then((hash) => {
    models.User.create({
      email: email,
      password: hash,
    })
      .then(() => {
        res.locals.success = true;
        next();
      })
      .catch((err) => {
        next({
          log: `authController.signup: Error: ${err}`,
          message: {
            err: 'Error occurred in authController.signup. Check server log for more details',
          },
        });
      });
  });
};

authController.login = (req, res, next) => {
  const { email, password } = req.body;

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
    res.locals.success = false;
    if (data !== undefined) {
      bcrypt.compare(password, data.password, (err, result) => {
        if (err) {
          return next(err);
        }
        if (result) {
          console.log('here true');
          res.locals.success = true;
          return next();
        }
      });
    }
    console.log(res.locals.success);
    return next();
  });
};

// authController.clearUserDB = (req, res, next) => {
//   console.log('here');
//   models.User.deleteMany()
//     .then(() => {
//       res.locals.deleted = 'User DB Cleared';
//       next();
//     })
//     .catch((err) => {
//       console.log('macros controller error: ', err);
//     });
// };

module.exports = authController;
