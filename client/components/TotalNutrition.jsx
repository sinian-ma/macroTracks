import React, { Component } from 'react';

const TotalNutrition = (props) => {
  return (
    <div className='nutrition-total'>
      <h1>Total Macro-Nutrients</h1>
      <div className='calories'>Total Calories: </div>
      <div className='protein'>Total Protein: </div>
      <div className='fat'>Total Fat: </div>
      <div className='carbs'>Total Carbohydrates: </div>
    </div>
  );
};

export default TotalNutrition;
