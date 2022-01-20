import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/components/dist/_ModalToDo.css';

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <article className='Modal'>
      {children}
    </article>,
    document.getElementById('modal')
  );
}

export { Modal };