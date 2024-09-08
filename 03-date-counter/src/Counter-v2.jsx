import React, { useState } from "react";

const CounterV2 = () => {
  const [range, setRange] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count); // 💎 learned about setDate() method

  //   const increaseStep = () => {
  //     setStep((prev) => prev + 1);
  //   };
  //   const decreaseStep = () => {
  //     if (step >= 2) setStep((prev) => prev - 1);
  //   };

  const increaseCount = () => {
    setCount((prev) => prev + range);
  };
  const decreaseCount = () => {
    setCount((prev) => prev - range);
  };

  //   console.log(today);
  return (
    <>
      <div>
        <input
          type="range"
          min="1"
          max="20"
          value={range}
          onChange={(e) => +setRange(+e.target.value)}
        />{" "}
        {range}
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

export default CounterV2;
