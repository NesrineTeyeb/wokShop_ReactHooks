import React from "react";
import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count+1);
  };
  const handleDecrement = () => {
    setCount(count-1);
  };
  useEffect(()=>{
    if (count === 10){
        alert('Good for you')
    }
  },[count])

  return (
    <div>
      <h1>Counter: </h1>
      <button onClick={handleIncrement}>Increment</button>
      <p>{count} </p>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default Counter;
