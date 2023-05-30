import React, { useState, useReducer, useEffect } from 'react';
import useAuthContext from '../../hooks/useAuthContext';
import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
const emailReducer = (state, action) => {
  //state holds the latest state
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') };
  }
  return { value: '', isValid: null }; //returns the state
};
const passwordReducer = (state, action) => {
  //state holds the latest state
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: '', isValid: null }; //returns the state
};
const Login = props => {
  const [emailState, emailDispatch] = useReducer(emailReducer, { value: '', isValid: null });
  const [passwordState, passwordDispatch] = useReducer(passwordReducer, { value: '', isValid: null });
  const [formIsValid, setformIsValid] = useState(false);

  const handleEmailChange = event => {
    emailDispatch({ type: 'USER_INPUT', val: event.target.value });
  };
  const handleEmailBlur = event => {
    emailDispatch({ type: 'INPUT_BLUR' });
  };
  const handlePasswordChange = event => {
    passwordDispatch({ type: 'USER_INPUT', val: event.target.value });
  };
  const handlePasswordBlur = event => {
    passwordDispatch({ type: 'INPUT_BLUR' });
  };

  //setting Alias while destructing
  const { isValid: isEmailValid } = emailState;
  const { isValid: isPasswordValid } = passwordState;
  //Check form validity
  useEffect(() => {
    //Debounce- Wait for few secs before the form validity is check is triggered. This allows the user to enter more words before a check is made
    //the cleanup function which runs before useEffect is called except for 1st time & also is called at unmounting
    //cleans up the previous time out and hence restricts all the checks that are triggered on typing within the 500 miliecstime
    const identifier = setTimeout(() => {
      setformIsValid(isEmailValid && isPasswordValid); //its best to use useEffect as the form is valid state is dependent on other states
    }, 500);

    //clean us previous timeout
    return () => {
      clearInterval(identifier);
    };
  }, [isEmailValid, isPasswordValid]);

  //On login submit

  const { isLoggedIn, onLogout, onLogin } = useAuthContext();
  const handleSubmit = e => {
    e.preventDefault();
    onLogin();
  };
  return (
    <Card className={classes.login}>
      <form onSubmit={handleSubmit}>
        <div className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ''}`}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={emailState.value} onChange={handleEmailChange} onBlur={handleEmailBlur}></input>
        </div>

        <div className={`${classes.control} ${passwordState.isValid === false ? classes.invalid : ''}`}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={passwordState.value}
            onChange={handlePasswordChange}
            onBlur={handlePasswordBlur}
          ></input>
        </div>

        <Button type="submit" onSubmit="handleSubmit" disabled={!formIsValid}>
          Login
        </Button>
      </form>
    </Card>
  );
};

export default Login;
