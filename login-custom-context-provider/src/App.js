import React, { useEffect, useState } from 'react';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MainHeader from './components/MainHeader/MainHeader';
import useAuthContext from './hooks/useAuthContext';

function App() {
  const { isLoggedIn, onLogin } = useAuthContext();
  return (
    <React.Fragment>
      <MainHeader></MainHeader>
      <main>
        {!isLoggedIn && <Login></Login>}
        {isLoggedIn && <Home></Home>}
      </main>
    </React.Fragment>
  );
}

export default App;
