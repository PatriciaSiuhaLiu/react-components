import React, { useEffect, useState } from 'react';
import Home from './Home/Home';
import Login from './Login/Login';
import MainHeader from './MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') === '1') {
      setisLoggedIn(true);
    }
  }, []);

  const loginHandler = () => {
    localStorage.setItem('isLoggedIn', '1');
    setisLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setisLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isLoggedIn={isLoggedIn} onLogout={logoutHandler}></MainHeader>
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler}></Login>}
        {isLoggedIn && <Home></Home>}
      </main>
    </React.Fragment>
  );
}

export default App;
