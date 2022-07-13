const express = require('express');

const macrosController = require('../controllers/macrosController');

const router = express.Router();

router.get('/', (req, res) => res.status(200));

// router.get('/species', starWarsController.getSpecies, (req, res) =>
//   res.status(200).json(res.locals.species)
// );

// router.get('/homeworld', starWarsController.getHomeworld, (req, res) =>
//   res.status(200).json(res.locals.planet)
// );

// router.get('/film', starWarsController.getFilm, (req, res) =>
//   res.status(200).json(res.locals.film)
// );

// router.post('/character', starWarsController.addCharacter, (req, res) =>
//   res.status(200).json({})
// );

module.exports = router;
