import React, { Component } from 'react';
import DatabaseSearch from './components/DatabaseSearch.jsx';
// import TotalNutrition from './components/TotalNutrition.jsx';
import { Route } from 'react-router-dom';
// import FoodCard from './components/FoodCard.jsx';
import AddFood from './components/AddFood.jsx';

const App = (props) => {
  return (
    <div className='router'>
      <main>
        <div>
          <DatabaseSearch />
          {/* <Route exact path='/' component={DatabaseSearch} />
          <Route exact path='/add' component={AddFood} /> */}
        </div>
      </main>
    </div>
  );
};

export default App;
