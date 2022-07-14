import React, { useContext } from 'react';

import { UserContext } from '../App.jsx';

const CurrentNutrition = () => {
  const user = useContext(UserContext);

  return (
    <div className='nutrition-current'>
      <h2 className='typ-imp-text'>Current Total</h2>
      <div className='macroCount'>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <h4 className='typ-text'>Calories: {user.calories}</h4>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <h4 className='typ-text'>Protein: {user.protein} </h4>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <h4 className='typ-text'>Fat: {user.fat} </h4>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <h4 className='typ-text'>Carbohydrates: {user.carbohydrate} </h4>
        &nbsp;&nbsp;&nbsp;&nbsp;
      </div>
    </div>
  );
};

export default CurrentNutrition;
