import React, { useState } from "react";

const Counter = () => {
  const today = new Date().toDateString();
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(today);

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
      {count ? (
        <p>
          {count} days from today is {date}
        </p>
      ) : (
        <p>Today is {date}</p>
      )}
    </>
  );
};

export default Counter;
