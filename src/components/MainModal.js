import React from 'react';
import PatientList from './PatientList';

import Counter from './Counter'

const MainModal = () => {
  return (
    <div className="MainModal">
      <div className="MainModal__title">
        Mon titre
      </div>
      <Counter />
      <PatientList />
    </div>
  );
}

export default MainModal;
