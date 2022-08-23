import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CurrentNutrition from './CurrentNutrition.jsx';
import GoalNutrition from './GoalNutrition.jsx';
import RemainingNutrition from './RemainingNutrition.jsx';

import FoodCard from './FoodCard.jsx';

const DatabaseSearch = () => {
  const [fetchedFood, setFetchedFood] = useState(false);
  const [food, setFood] = useState([]);

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((food) => {
        if (!Array.isArray(food)) food = [];
        setFetchedFood(true);
        setFood(food);
      })
      .catch((err) =>
        console.log('DatabaseSearch.componentDidMount: get food: ERROR: ', err)
      );
  }, []);

  if (!{ fetchedFood }) {
    return (
      <div>
        <h1>Loading data, please wait...</h1>
      </div>
    );
  }

  if (!{ food }) return null;

  const foodElems = food.map((foodObj, i) => {
    return <FoodCard key={i} info={foodObj} />;
  });

  return (
    <section className='mainSection'>
      <div className='fixed-container'>
        <GoalNutrition />
        <CurrentNutrition />
        <RemainingNutrition />
      </div>

      <div className='pageHeader'>
        <span className='body-heading'>
          <div className='aboveFoodCards'>
            <h1>Food Log</h1>
            <span>
              <Link to={'/add'}>
                <button type='button' className='green-btnSecondary'>
                  Add Food
                </button>
              </Link>
              <Link to={'/delete'}>
                <button type='button' className='red-btnSecondary'>
                  Delete Food
                </button>
              </Link>
            </span>
          </div>

          <div className='foodContainer'>{foodElems}</div>
        </span>
      </div>
    </section>
  );
};

export default DatabaseSearch;
