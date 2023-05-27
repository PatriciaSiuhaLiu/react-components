import React from 'react';
import ReactDOM from 'react-dom';
import ModalOverlay from '../modal/ModalOverlay';
import Backdrop from '../backdrop/Backdrop';
const ErrorModal = props => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalOverlay title="Error" onOkayButtonClick={props.onOkayButtonClick}>
          <div>Erorr: Name is invalid</div>
        </ModalOverlay>,
        document.getElementById('overlay-root')
      )}
      {ReactDOM.createPortal(<Backdrop onBackdropClick={props.onOkayButtonClick}></Backdrop>, document.getElementById('backdrop-root'))}
    </>
  );
};

export default ErrorModal;
