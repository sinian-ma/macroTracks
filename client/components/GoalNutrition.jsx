import React, { useContext } from 'react';

import { UserContext } from '../App.jsx';

const GoalNutrition = () => {
  const user = useContext(UserContext);

  return (
    <div className='nutrition-goal'>
      <h2 className='typ-imp-text'>Goals</h2>
      <div className='macroCount'>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <h4 className='typ-text'>Calories: {user.goalCalories}</h4>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <h4 className='typ-text'>Protein: {user.goalProtein} </h4>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <h4 className='typ-text'>Fat: {user.goalFat} </h4>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <h4 className='typ-text'>Carbohydrates: {user.goalCarbohydrate} </h4>
        &nbsp;&nbsp;&nbsp;&nbsp;
      </div>
    </div>
  );
};

export default GoalNutrition;
