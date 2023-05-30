import React from 'react';
import classes from './MainHeader.module.css';
import Navigation from './Navigation';

const MainHeader = props => {
  return (
    <header className={classes['main-header']}>
      <h1>Login Page</h1>
      <Navigation onLogout={props.onLogout} isLoggedIn={props.isLoggedIn}></Navigation>
    </header>
  );
};

export default MainHeader;
