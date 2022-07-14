import React, { useContext } from 'react';

import { UserContext } from '../App.jsx';

const CurrentNutrition = () => {
  const user = useContext(UserContext);

  return (
    <div className='nutrition-current'>
      <h3 className='typ-imp-text'>Current Total</h3>
      <div className='macroCount'>
        <div className='typ-text'>Calories: {user.calories}</div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div className='typ-text'>Protein: {user.protein} </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div className='typ-text'>Fat: {user.fat} </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className='typ-text'>Carbohydrates: {user.carbohydrate} </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
      </div>
    </div>
  );
};

export default CurrentNutrition;
