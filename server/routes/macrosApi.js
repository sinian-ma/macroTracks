const express = require('express');

const macrosController = require('../controllers/macrosController');

const router = express.Router();

router.get('/', macrosController.getFood, (req, res) =>
  res.status(200).json(res.locals.food)
);

router.post('/add', macrosController.addFood, (req, res) => {
  res.status(200).json(res.locals.food);
});

module.exports = router;
