const models = require('../models/userModels');
require('dotenv').config();

const authController = {};
const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');

// const validEmail = (username) => {
//   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   if (username.match(mailformat)) {
//     return true;
//   }
//   return false;
// };

authController.signup = (req, res, next) => {
  const { username, password, verifiedPassword } = req.body;

  if (!username) next('Please enter a valid username.');
  if (!password || !verifiedPassword) next('Please enter a password');
  if (password !== verifiedPassword) next('Passwords do not match.');

  const hashPassword = async () => {
    const hashedPassword = await bcrypt.hash(password, SALT_WORK_FACTOR);
    try {
      const newUser = models.User.create({
        username: username,
        password: hashedPassword,
      });
      await newUser;
      res.locals.success = true;
      next();
    } catch (error) {
      next({
        log: `authController.signup: Error: ${error}`,
        message: {
          err: 'This username already exists.',
        },
      });
    }
  };

  hashPassword();
};

authController.login = (req, res, next) => {
  const { username, password } = req.body;

  res.locals.success = false;

  models.User.findOne({ username: username }, (error, account) => {
    if (account) {
      bcrypt.compare(password, account.password, (err, isSuccess) => {
        if (err) {
          return next(err);
        }
        if (isSuccess) {
          res.locals.success = true;
        }
        return next();
      });
    } else {
      return next(error);
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
