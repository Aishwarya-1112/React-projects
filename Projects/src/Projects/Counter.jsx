import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const plus = () => setCount(count + 1);

  const minus = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <h1>Counter</h1>

      <h1>{count}</h1>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
export default Counter;
