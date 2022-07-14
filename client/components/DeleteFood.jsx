import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProp;
}

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

const DeleteFood = () => {
  const [item_name, nameOnChange] = useInput('');

  function deleteFd() {
    fetch('/api', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify({ item_name: item_name }),
    })
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => console.log('AddFood fetch: ERROR: ', err));

    // alert('Entry Deleted!');
  }

  return (
    <section className='editFoodContainer'>
      <article className='cardEditFood'>
        <h3>What do you want to delete?</h3>
        <div className='editFoodFields'>
          <label htmlFor='name'>Food Item: </label>
          <input
            name='Food'
            placeholder='Enter food'
            value={item_name}
            onChange={nameOnChange}
          />
        </div>
        <div className='createFoodButtonContainer'>
          <Link to='/' className='backLink'>
            <button type='button' className='btnSecondary'>
              Go Back
            </button>
          </Link>
          <button type='button' className='btnMain' onClick={deleteFd}>
            Delete
          </button>
          <button type='button' className='btnMain' onClick={deleteFd}>
            Delete All
          </button>
        </div>
      </article>
    </section>
  );
};

export default withRouter(DeleteFood);
