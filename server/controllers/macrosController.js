const models = require('../models/macrosModels');

const macrosController = {};

macrosController.getFood = (req, res, next) => {
  // write code here
  console.log('macrosController console log');
  models.Post.find()
    .then((data) => {
      // console.log('Data from Person.find: ', data);
      console.log('macrosController console log');
      res.locals.food = data;
      next();
    })
    .catch((err) => {
      console.log('macros controller error: ', err);
    });
};

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
    item_name: item_name,
    nf_calories: nf_calories,
    nf_total_fat: nf_total_fat,
    nf_total_carbohydrate: nf_total_carbohydrate,
    nf_protein: nf_protein,
    nf_serving_size_qty: nf_serving_size_qty,
    nf_serving_size_unit: nf_serving_size_unit,
  })
    .then((foodDoc) => {
      res.locals.food = foodDoc;
      // console.log('res locals: ', res.locals.food);
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
