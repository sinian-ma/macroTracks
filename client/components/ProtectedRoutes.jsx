import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router';
import { UserContext } from '../App.jsx';

const useAuth = () => {
  const user = { loggedIn: false };
  return user && user.loggedIn;
};

const ProtectedRoutes = () => {
  const user = useContext(UserContext);

  return user.loggedIn ? <Outlet /> : <Navigate to='/' />;
};

export default ProtectedRoutes;
