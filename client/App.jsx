import React, { Component } from 'react';
import DatabaseSearch from './components/DatabaseSearch.jsx';
import TotalNutrition from './components/TotalNutrition.jsx';
import { Routes, Route } from 'react-router-dom';
import AddFood from './components/AddFood.jsx';
import DeleteFood from './components/DeleteFood.jsx';
import Header from './components/Header.jsx';
import UserInfo from './components/UserInfo.jsx';

const App = (props) => {
  return (
    <div className='router'>
      <main>
        <Header />
        <Routes>
          <Route exact path='/user-information' element={<UserInfo />} />
          <Route exact path='/' element={<DatabaseSearch />} />
          <Route exact path='/add' element={<AddFood />} />
          <Route exact path='/delete' element={<DeleteFood />} />
          <Route exact path='/summary' element={<TotalNutrition />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
