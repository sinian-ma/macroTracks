import React, { Component, useState } from 'react';

const CurrentNutrition = (props) => {
  const [calories, setCalories] = useState(0);
  const [protein, setProtein] = useState(0);
  const [fat, setFat] = useState(0);
  const [carbohydrate, setCarbohydrate] = useState(0);

  return (
    <div className='nutrition-current'>
      <h3 className='typ-imp-text'>Current Total</h3>
      <div className='macroCount'>
        <div className='typ-text'>Calories: {calories}</div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div className='typ-text'>Protein: {protein} </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div className='typ-text'>Fat: {fat} </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className='typ-text'>Carbohydrates: {carbohydrate} </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
      </div>
    </div>
  );
};

export default CurrentNutrition;
