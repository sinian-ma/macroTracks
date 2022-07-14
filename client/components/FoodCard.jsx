import React from 'react';

const FoodCard = ({ info }) => {
  const {
    item_name,
    nf_calories,
    nf_total_fat,
    nf_total_carbohydrate,
    nf_protein,
    nf_serving_size_qty,
    nf_serving_size_unit,
    // nf_serving_weight_grams,
  } = info;

  return (
    <article className='card foodCard'>
      <div className='foodHeadContainer'>
        <h3 className='foodName'>{item_name}</h3>
      </div>

      <ul className='foodDetailsList'>
        <li className='foodDetail'>Total Calories: {nf_calories}</li>
        <li className='foodDetail'>Total Fat: {nf_total_fat}</li>
        <li className='foodDetail'>Total Carbs: {nf_total_carbohydrate}</li>
        <li className='foodDetail'>Total Protein: {nf_protein}</li>
        <li className='foodDetail'>Serving Size: {nf_serving_size_qty}</li>
        <li className='foodDetail'>Serving Unit: {nf_serving_size_unit}</li>
        {/* <li className='foodDetail'>
          Serving Size in Grams: {nf_serving_weight_grams}
        </li> */}
      </ul>
    </article>
  );
};

export default FoodCard;
