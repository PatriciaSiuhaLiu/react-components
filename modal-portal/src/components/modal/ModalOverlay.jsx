import React from 'react';
import Button from '../common/button/Button';
import Card from '../common/card/Card';
import './ModalOverlay.css';
const ModalOverlay = props => {
  return (
    <Card class="modal">
      <header class="header">
        <h2>{props.title}</h2>
      </header>
      <div className="content">{props.children}</div>

      <footer className="actions">
        <Button onClick={props.onOkayButtonClick}>Okay</Button>
      </footer>
    </Card>
  );
};

export default ModalOverlay;
