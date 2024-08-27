import React, { useState } from "react";

const Counter = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count); // 💎 learned about setDate() method

  const increaseStep = () => {
    setStep((prev) => prev + 1);
  };
  const decreaseStep = () => {
    if (step >= 2) setStep((prev) => prev - 1);
  };
  const increaseCount = () => {
    setCount((prev) => prev + step);
  };
  const decreaseCount = () => {
    setCount((prev) => prev - step);
  };

  //   console.log(today);
  return (
    <>
      <h1>Date Counter</h1>
      <div>
        <button onClick={decreaseStep}>-</button>
        <span>Step: {step}</span>
        <button onClick={increaseStep}>+</button>
      </div>
      <div>
        <button onClick={decreaseCount}>-</button>
        <span>Count: {count}</span>
        <button onClick={increaseCount}>+</button>
      </div>

      <p>
        {!count
          ? "Today is "
          : count < 1
          ? `${count} days ago was `
          : `${count} days from today is `}{" "}
        <strong>{date.toDateString()}</strong>
      </p>
    </>
  );
};

export default Counter;
