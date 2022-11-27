const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_KEY;

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'Food',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const postSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  item_name: {
    type: String,
    required: true,
  },
  nf_calories: {
    type: Number,
    required: true,
  },
  nf_total_fat: {
    type: Number,
    required: true,
  },
  nf_total_carbohydrate: {
    type: Number,
    required: true,
  },
  nf_protein: {
    type: Number,
    required: true,
  },
  nf_serving_weight_grams: {
    type: Number,
    // required: true,
  },
});

const Post = mongoose.model('Post', postSchema);

module.exports = { Post };
