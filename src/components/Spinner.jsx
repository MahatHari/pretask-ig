import React from 'react';

function Spinner() {
  return (
    <div className='container text-center'>
      <div
        className='spinner-border text-primary '
        style={{ width: '200px', height: '200px', marginTop: '100px' }}
      ></div>
    </div>
  );
}

export default Spinner;
