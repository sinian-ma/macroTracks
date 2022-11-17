import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App.jsx';

const Header = () => {
  let loggedInHeader = <div></div>;
  const user = useContext(UserContext);

  const logout = () => {
    user.setLoggedIn(false);
  };

  if (user.loggedIn) {
    loggedInHeader = (
      <div className='right-head-container'>
        <Link className='right-head-text' to={'/home'}>
          <div className='right-head-text'>Home</div>
        </Link>
        <Link className='right-head-text' to={'/user-information'}>
          <div className='right-head-text'>User Information</div>
        </Link>
        <Link className='right-head-text' to={'/summary'}>
          <div className='right-head-text'>Goals</div>
        </Link>
        <Link className='right-head-text' to={'/'} onClick={logout}>
          <div className='right-head-text'>Logout</div>
        </Link>
      </div>
    );
  }

  return (
    <div className='header-container'>
      <div className='left-head-container'>
        <Link className='logo' to={'/home'}>
          MacroTracks
        </Link>
      </div>
      {loggedInHeader}
    </div>
  );
};

export default Header;
