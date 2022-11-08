const models = require('../models/userModels');
const axios = require('axios');
require('dotenv').config();

const authController = {};

authController.signup = (req, res, next) => {
  const { email, password } = req.body;

  models.User.create({
    email: email,
    password: password,
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
