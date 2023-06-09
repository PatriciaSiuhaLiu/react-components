import React, { useEffect, useState } from 'react';

const AuthContext = React.createContext({ isLoggedIn: false, onLogin: (email, password) => {}, onLogout: () => {} });
export const AuthContextProvider = props => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginHandler = (email, password) => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === '1') {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
