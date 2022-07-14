const models = require('../models/macrosModels');

const macrosController = {};

macrosController.getFood = (req, res, next) => {
  // write code here
  models.Post.find()
    .then((data) => {
      res.locals.food = data;
      next();
    })
    .catch((err) => {
      console.log('macros controller error: ', err);
    });
};

macrosController.deleteFood = (req, res, next) => {
  if (!req.body.item_name) {
    models.Post.deleteMany()
      .then((data) => {
        res.locals.food = data;
        next();
      })
      .catch((err) => {
        console.log('macros controller error: ', err);
      });
  } else {
    models.Post.findOneAndDelete({ item_name: req.body.item_name })
      .then((data) => {
        res.locals.food = data;
        next();
      })
      .catch((err) => {
        console.log('macros controller error: ', err);
      });
  }
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
    // nf_serving_weight_grams,
  } = req.body;

  models.Post.create({
    item_name: item_name,
    nf_calories: nf_calories,
    nf_total_fat: nf_total_fat,
    nf_total_carbohydrate: nf_total_carbohydrate,
    nf_protein: nf_protein,
    nf_serving_size_qty: nf_serving_size_qty,
    nf_serving_size_unit: nf_serving_size_unit,
    // nf_serving_weight_grams: nf_serving_weight_grams,
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
