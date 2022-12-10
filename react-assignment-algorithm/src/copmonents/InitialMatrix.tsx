import React from 'react';

interface InitialMatrixProps {
    size: number;
}

function InitialMatrix({size}: InitialMatrixProps) {
  return (
    <div className="InitialMatrix">
        {Array(size).map((as,index) => {
            return <>"Item" + index</>
        })}
    </div>
  );
}

export default InitialMatrix;
