import React, { useContext } from 'react';

import { UserContext } from '../App.jsx';

const RemainingNutrition = () => {
  const user = useContext(UserContext);

  return (
    <div className='nutrition-remaining'>
      <h2 className='typ-imp-text'>Remaining</h2>
      <div className='macroCount'>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <h4 className='typ-text'>
          Calories: {user.goalCalories - user.calories}
        </h4>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <h4 className='typ-text'>Protein: {user.goalProtein - user.protein}</h4>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <h4 className='typ-text'>Fat: {user.goalFat - user.fat}</h4>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <h4 className='typ-text'>
          Carbohydrates: {user.goalCarbohydrate - user.carbohydrate}
        </h4>
        &nbsp;&nbsp;&nbsp;&nbsp;
      </div>
    </div>
  );
};

export default RemainingNutrition;
