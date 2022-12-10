import React from 'react';
import InitialMatrix from './InitialMatrix';

const MATIRX_SIZE = 6;

function Wrapper() {
  return (
    <div className="Wrapper">
        <InitialMatrix size={MATIRX_SIZE} />
    </div>
  );
}

export default Wrapper;
