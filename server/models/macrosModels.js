// import fetch from 'node-fetch';
const mongoose = require('mongoose');
// const axios = require('axios');

const MONGO_URI =
  'mongodb+srv://ian_nyc:mangoPLS1@food-cluster.knqqe.mongodb.net/?retryWrites=true&w=majority';

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
  nf_serving_size_qty: {
    type: Number,
    required: true,
  },
  nf_serving_size_unit: {
    type: String,
    required: true,
  },
});

const Post = mongoose.model('Post', postSchema);

// const food = 'popcorn';

// async function getPosts() {
//   const options = {
//     method: 'GET',
//     url: `https://nutritionix-api.p.rapidapi.com/v1_1/search/${food}?results=0:20&fields=item_name,nf_calories,nf_protein,nf_total_carbohydrate,nf_total_fat, nf_serving_weight_grams`,
//     // params: {
//     //   fields:
//     //     'item_name,item_id,nf_calories,nf_total_fat, nf_total_carbohydrate, nf_protein',
//     // },
//     headers: {
//       'X-RapidAPI-Key': '8d78c2c137msh45549c0419a5bcfp1908b7jsn3ad72d367882',
//       'X-RapidAPI-Host': 'nutritionix-api.p.rapidapi.com',
//     },
//   };

//   axios
//     .request(options)
//     .then(function (response) {
//       const {
//         item_name,
//         nf_calories,
//         nf_total_fat,
//         nf_total_carbohydrate,
//         nf_protein,
//         nf_serving_size_qty,
//         nf_serving_size_unit,
//       } = response.data.hits[0].fields;
//       console.log(response.data.hits[0].fields);
//       const post = new Post({
//         item_name,
//         nf_calories,
//         nf_total_fat,
//         nf_total_carbohydrate,
//         nf_protein,
//         nf_serving_size_qty,
//         nf_serving_size_unit,
//       });
//       post.save();
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
// }

// getPosts();

module.exports = { Post };
