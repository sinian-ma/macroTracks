import React, { useState, useContext } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../App.jsx';
import CurrentNutrition from './CurrentNutrition.jsx';
import GoalNutrition from './GoalNutrition.jsx';
import RemainingNutrition from './RemainingNutrition.jsx';

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProp;
}
// Custom hook for handling input boxes
// saves us from creating onChange handlers for them individually
const useInput = (init) => {
  const [value, setValue] = useState(init);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  // return the value with the onChange function instead of setValue function
  return [value, onChange];
};

const AddFood = (props) => {
  const user = useContext(UserContext);
  const [item_name, nameOnChange] = useInput('');
  const [serving_size, sizeOnChange] = useInput('');

  function findFood() {
    const options = {
      method: 'GET',
      url: `https://nutritionix-api.p.rapidapi.com/v1_1/search/${item_name}?results=0:20&fields=item_name,nf_calories,nf_protein,nf_total_carbohydrate,nf_total_fat,nf_serving_weight_grams`,
      headers: {
        'X-RapidAPI-Key': process.env.NUTRITIONIX_API_KEY,
        'X-RapidAPI-Host': 'nutritionix-api.p.rapidapi.com',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        return response.data.hits[0].fields;
      })
      .then((obj) => {
        const {
          item_name,
          nf_calories,
          nf_total_fat,
          nf_total_carbohydrate,
          nf_protein,

          nf_serving_weight_grams,
        } = obj;

        const body = {
          item_name: item_name,
          nf_calories: Math.ceil(
            (serving_size / nf_serving_weight_grams) * nf_calories
          ),
          nf_total_fat: Math.ceil(
            (serving_size / nf_serving_weight_grams) * nf_total_fat
          ),
          nf_total_carbohydrate: Math.ceil(
            (serving_size / nf_serving_weight_grams) * nf_total_carbohydrate
          ),
          nf_protein: Math.ceil(
            (serving_size / nf_serving_weight_grams) * nf_protein
          ),

          nf_serving_weight_grams: serving_size,
        };

        let newCalories = Math.floor(user.calories + body.nf_calories);
        let newProtein = Math.floor(user.protein + body.nf_protein);
        let newFat = Math.floor(user.fat + body.nf_total_fat);
        let newCarbohydrate = Math.floor(
          user.carbohydrate + body.nf_total_carbohydrate
        );

        user.setCalories(newCalories);
        user.setProtein(newProtein);
        user.setFat(newFat);
        user.setCarbohydrate(newCarbohydrate);
        user.setServingSizeGram(serving_size);

        fetch('/api', {
          method: 'POST',
          headers: {
            'Content-Type': 'Application/JSON',
          },
          body: JSON.stringify(body),
        })
          .then((resp) => resp.json())

          .catch((err) => console.log('AddFood fetch: ERROR: ', err));
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  return (
    <div className='editFoodPages'>
      <div className='fixed-container'>
        <GoalNutrition />
        <CurrentNutrition />
        <RemainingNutrition />
      </div>
      <div className='editFoodContainer'>
        <article className='cardEditFood'>
          <h3>What did you eat?</h3>
          <div className='editFoodFields'>
            <label htmlFor='name'>Food Item: </label>
            <input
              className='input'
              name='Food'
              placeholder='Enter food'
              value={item_name}
              onChange={nameOnChange}
            />
          </div>
          <div className='editFoodFields'>
            <label htmlFor='name'>How many grams? </label>
            <input
              className='input'
              name='Food'
              placeholder='Enter grams'
              value={serving_size}
              onChange={sizeOnChange}
            />
          </div>
          <div className='createCharButtonContainer'>
            <Link to='/' className='backLink'>
              <button type='button' className='btnSecondary'>
                Go Back
              </button>
            </Link>
            <button type='button' className='btnMainAdd' onClick={findFood}>
              Save
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default withRouter(AddFood);
