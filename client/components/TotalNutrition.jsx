import React, { Component } from 'react';

const TotalNutrition = (props) => {
  return (
    <div className='nutrition-total'>
      <h1 className='typ-head'>Aim for:</h1>
      <div className='typ-text'>Total Calories: 2500</div>
      <div className='typ-text'>Total Protein: 170 </div>
      <div className='typ-text'>Total Fat: 20 </div>
      <div className='typ-text'>Total Carbohydrates: 50 </div>
    </div>
  );
};

export default TotalNutrition;
