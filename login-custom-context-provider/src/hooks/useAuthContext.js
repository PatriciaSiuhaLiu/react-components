import React, { useContext } from 'react';
import AuthContext from '../store/auth-context';

const useAuthContext = () => {
  return useContext(AuthContext);
};

export default useAuthContext;
