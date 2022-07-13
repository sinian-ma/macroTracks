const models = require('../models/macrosModels');

// const starWarsController = {};

// starWarsController.getCharacters = (req, res, next) => {
//   // write code here
//   models.People.find()
//     .then((data) => {
//       // console.log('Data from Person.find: ', data);
//       res.locals.person = data;
//       next();
//     })
//     .catch((err) => {
//       console.log('Star Wars Controller Error: ', err);
//     });
// };

// starWarsController.getSpecies = (req, res, next) => {
//   // write code here
//   const speciesId = req.query.id;
//   models.Species.find({ _id: speciesId })
//     .then((data) => {
//       // console.log('Data from species.find: ', data);
//       res.locals.species = data[0];
//       next();
//     })
//     .catch((err) => {
//       console.log('Star Wars Controller Error: ', err);
//     });
// };

// starWarsController.getHomeworld = (req, res, next) => {
//   // write code here
//   const homeworldId = req.query.id;
//   models.Planet.find({ _id: homeworldId })
//     .then((data) => {
//       // console.log('Data from species.find: ', data);
//       res.locals.planet = data[0];
//       next();
//     })
//     .catch((err) => {
//       console.log('Star Wars Controller Error: ', err);
//     });
// };

// starWarsController.getFilm = (req, res, next) => {
//   // write code here
//   const filmId = req.query.id;
//   models.Film.find({ _id: filmId })
//     .then((data) => {
//       // console.log('Data from species.find: ', data);
//       res.locals.film = data[0];
//       next();
//     })
//     .catch((err) => {
//       console.log('Star Wars Controller Error: ', err);
//     });
// };

// starWarsController.addCharacter = (req, res, next) => {
//   // write code here

//   next();
// };

// module.exports = starWarsController;
