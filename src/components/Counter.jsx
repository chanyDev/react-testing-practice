import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button onClick={decrease}>-</button>
        <p style={{ width: '50px', margin: 0, textAlign: 'center' }}>{count}</p>
        <button onClick={increase}>+</button>
      </div>
    </div>
  );
};

export default Counter;
