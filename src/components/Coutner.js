import React from 'react';

const Coutner = ({number, onIncrease, onDecrease}) => {
    return (
        <div>
            <h1>{number} 뭐야 </h1>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </div>
    );
};

export default Coutner;