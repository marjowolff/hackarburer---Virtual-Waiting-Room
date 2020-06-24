import React from 'react';
import PatientList from './PatientList';

const MainModal = () => {
  return (
    <div className="MainModal">
      <div className="MainModal__title">
        Mon titre
      </div>
      <PatientList />
    </div>
  );
}

export default MainModal;
