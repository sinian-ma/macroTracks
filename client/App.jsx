import React, { Component } from 'react';
import DatabaseSearch from './components/DatabaseSearch.jsx';
// import TotalNutrition from './components/TotalNutrition.jsx';
import { Routes, Route, Link } from 'react-router-dom';
import AddFood from './components/AddFood.jsx';
import DeleteFood from './components/DeleteFood.jsx';

const App = (props) => {
  return (
    <div className='router'>
      <main>
        <Routes>
          <Route exact path='/' element={<DatabaseSearch />} />
          <Route exact path='/add' element={<AddFood />} />
          <Route exact path='/delete' element={<DeleteFood />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
