import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Custom hook for handling input boxes
// saves us from creating onChange handlers for them individually
const useInput = (init) => {
  const [value, setValue] = useState(init);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  // return the value with the onChange function instead of setValue function
  return [value, onChange];
};

const AddFood = (props) => {
  const [item_name, nameOnChange] = useInput('');
  const saveFood = () => {
    // check if name is empty
    if (item_name === '') {
      setNameError('required');
      // check if height is not a number
    }
    const body = {
      item_name,
    };
    fetch('/api/character', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify(body),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      })
      .then(() => {
        props.history.push('/');
      })
      .catch((err) =>
        console.log('CreateCharacter fetch /api/character: ERROR: ', err)
      );
  };

  // useEffect to clear nameError when `name` is changed
  useEffect(() => {
    setNameError(null);
  }, [item_name]);

  return (
    <section className='mainSection createCharContainer'>
      <header className='pageHeader'>
        <h2>Add Food</h2>
        <Link to='/' className='backLink'>
          <button type='button' className='btnSecondary'>
            Back to Macros
          </button>
        </Link>
      </header>

      <article className='card createFood'>
        <h3>What did you eat?</h3>
        <div className='createFoodFields'>
          <label htmlFor='name'>Food Item: </label>
          <input
            name='Food'
            placeholder='Enter your food item here.'
            value={item_name}
            onChange={nameOnChange}
          />
          {nameError ? <span className='errorMsg'>{nameError}</span> : null}
        </div>
        <div className='createCharButtonContainer'>
          <Link to='/' className='backLink'>
            <button type='button' className='btnSecondary'>
              Cancel
            </button>
          </Link>
          <button type='button' className='btnMain' onClick={saveFood}>
            Save
          </button>
        </div>
      </article>
    </section>
  );
};

export default AddFood;
