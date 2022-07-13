const express = require('express');

const macrosController = require('../controllers/macrosController');

const router = express.Router();

router.get('/', (req, res) => res.status(200));

router.post(
  '/add',
  () => {
    console.log(1);
    next();
  },
  macrosController.addFood,
  (req, res) => {
    // console.log(req);
    res.status(200).json(res.locals.food);
  }
);

module.exports = router;
