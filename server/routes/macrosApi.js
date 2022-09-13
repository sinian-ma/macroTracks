const express = require('express');

const macrosController = require('../controllers/macrosController');

const router = express.Router();

router.get('/', macrosController.getFood, (req, res) =>
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
