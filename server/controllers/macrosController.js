const models = require('../models/macrosModels');

const macrosController = {};

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

macrosController.addFood = (req, res, next) => {
  // write code here
  const {
    item_name,
    nf_calories,
    nf_total_fat,
    nf_total_carbohydrate,
    nf_protein,
    nf_serving_size_qty,
    nf_serving_size_unit,
  } = req.body;
  models.Post.create({
    item_name,
    nf_calories,
    nf_total_fat,
    nf_total_carbohydrate,
    nf_protein,
    nf_serving_size_qty,
    nf_serving_size_unit,
  })
    .then((foodDoc) => {
      res.locals.food = foodDoc;
      next();
    })
    .catch((err) => {
      next({
        log: `macrosController.addFood: Error: ${err}`,
        message: {
          err: 'Error occurred in macrosController.addFood. Check server log for more details',
        },
      });
    });
};

module.exports = macrosController;
