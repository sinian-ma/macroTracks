import React, { useState, useEffect } from 'react';
import DatabaseSearch from './components/DatabaseSearch.jsx';
import TotalNutrition from './components/TotalNutrition.jsx';
import { Routes, Route } from 'react-router-dom';
import AddFood from './components/AddFood.jsx';
import DeleteFood from './components/DeleteFood.jsx';
import Header from './components/Header.jsx';
import UserInfo from './components/UserInfo.jsx';

const App = () => {
  const [calories, setCalories] = useState(0);
  const [protein, setProtein] = useState(0);
  const [fat, setFat] = useState(0);
  const [carbohydrate, setCarbohydrate] = useState(0);
  const [servingSizeGram, setServingSizeGram] = useState(0);

  const [goalCalories, setGoalCalories] = useState(2727);
  const [goalProtein, setGoalProtein] = useState(166);
  const [goalFat, setGoalFat] = useState(77);
  const [goalCarbohydrate, setGoalCarbohydrate] = useState(364);

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((food) => {
        console.log(food);
        let sumCalories = 0;
        let sumProtein = 0;
        let sumFat = 0;
        let sumCarbohydrate = 0;
        food.forEach((obj) => {
          sumCalories += obj.nf_calories;
          sumProtein += obj.nf_protein;
          sumFat += obj.nf_total_fat;
          sumCarbohydrate += obj.nf_total_carbohydrate;
        });
        setCalories(Math.floor(sumCalories));
        setProtein(Math.floor(sumProtein));
        setFat(Math.floor(sumFat));
        setCarbohydrate(Math.floor(sumCarbohydrate));
      })
      .catch((err) =>
        console.log('DatabaseSearch.componentDidMount: get food: ERROR: ', err)
      );
  }, []);

  return (
    <UserContext.Provider
      value={{
        calories,
        setCalories,
        protein,
        setProtein,
        fat,
        setFat,
        carbohydrate,
        setCarbohydrate,
        goalCalories,
        setGoalCalories,
        goalProtein,
        setGoalProtein,
        goalFat,
        setGoalFat,
        goalCarbohydrate,
        setGoalCarbohydrate,
        servingSizeGram,
        setServingSizeGram,
      }}
    >
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
    </UserContext.Provider>
  );
};

export const UserContext = React.createContext();
export default App;
