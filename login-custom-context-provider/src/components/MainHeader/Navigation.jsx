import React from 'react';
import classes from './Navigation.module.css';
import useAuthContext from '../../hooks/useAuthContext';
const Navigation = props => {
  const { isLoggedIn, onLogout } = useAuthContext();
  return (
    <nav className={`${classes.nav}`}>
      <ul>
        {isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}

        {isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}

        {isLoggedIn && (
          <li>
            <button onClick={onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
