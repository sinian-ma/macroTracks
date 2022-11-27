const express = require('express');

const macrosController = require('../controllers/macrosController');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/signup', authController.signup, (req, res) => {
  res.status(200).json(res.locals.success);
});

router.post('/login', authController.login, (req, res) => {
  res.status(200).json(res.locals.success);
});

//for developer purposes only - clears saved user logins
router.delete('/clearUserDB', authController.clearUserDB, (req, res) => {
  res.status(200).json(res.locals.deleted);
});

router.post('/get', macrosController.getFood, (req, res) =>
  res.status(200).json(res.locals.food)
);

router.post('/search', macrosController.searchFood, (req, res) => {
  res.status(200).json(res.locals.food);
});

router.post('/', macrosController.addFood, (req, res) => {
  res.status(200).json(res.locals.food);
});

router.delete('/', macrosController.deleteFood, (req, res) => {
  res.status(200).json(res.locals.food);
});

module.exports = router;
