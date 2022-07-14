import React from 'react';

const FoodCard = ({ info }) => {
  const {
    item_name,
    nf_calories,
    nf_total_fat,
    nf_total_carbohydrate,
    nf_protein,
    nf_serving_weight_grams,
  } = info;

  return (
    <article className='foodCard'>
      <div className='foodHeadContainer'>
        <h3 className='foodName'>{item_name}</h3>
      </div>

      <div className='foodDetailsList'>
        <div className='foodDetail'>Total Calories: {nf_calories}</div>
        <div className='foodDetail'>Total Fat: {nf_total_fat}</div>
        <div className='foodDetail'>Total Carbs: {nf_total_carbohydrate}</div>
        <div className='foodDetail'>Total Protein: {nf_protein}</div>
        <div className='foodDetail'>
          Serving Size in Grams: {nf_serving_weight_grams}
        </div>
      </div>
    </article>
  );
};

export default FoodCard;
