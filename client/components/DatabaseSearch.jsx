import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import FoodCard from './FoodCard.jsx';

class Foods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchedFood: false,
      food: [],
    };
  }

  componentDidMount() {
    fetch(
      'https://api.nutritionix.com/v1_1/search/apple?results=0:5&nf_protein==1&fields=item_name,nf_calories,nf_protein,nf_total_carbohydrate,nf_total_fat'
    )
      .then((res) => res.json())
      .then((food) => {
        // console.log(food.hits);
        if (!Array.isArray(food.hits)) food = [];
        food = food.hits;
        let arr = [];
        food.forEach((obj) => arr.push(obj.fields));
        food = arr;
        // console.log(food);
        return this.setState({
          food,
          fetchedFood: true,
        });
      })
      .catch((err) =>
        console.log('DatabaseSearch.componentDidMount: get food: ERROR: ', err)
      );
  }

  render() {
    if (!this.state.fetchedFood)
      return (
        <div>
          <h1>Loading data, please wait...</h1>
        </div>
      );

    const { food } = this.state;
    // console.log(food);

    if (!food) return null;

    if (!food.length) return <div>Sorry, no food found</div>;

    const foodElems = food.map((foodObj, i) => {
      return <FoodCard key={i} info={foodObj} />;
    });

    return (
      <section className='mainSection'>
        <header className='pageHeader'>
          <h2>Consumed Foods:</h2>

          <Link to={'/add'}>
            <button type='button' className='btnSecondary'>
              Add Food
            </button>
          </Link>
        </header>
        <div className='foodContainer'>{foodElems}</div>
      </section>
    );
  }
}

export default Foods;
