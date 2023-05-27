import Button from './components/common/button/Button';
import './App.css';
import React, { useState } from 'react';
import ErrorModal from './components/errorModal/ErrorModal';

function App() {
  const [error, setError] = useState(false);
  const openModal = () => {
    setError(true);
  };
  const handleOkayButtonClick = () => {
    setError(false);
  };
  return (
    <div className="App">
      <h1>Modal</h1>
      <div className="Wrapper">
        {error && <ErrorModal onOkayButtonClick={handleOkayButtonClick} />}
        <Button onClick={openModal}>Open Modal</Button>
      </div>
    </div>
  );
}

export default App;
