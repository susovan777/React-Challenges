import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [fetchData, setFetchData] = useState([]);
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  /* 
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();F
    console.log(data.slip.advice);
    setAdvice(data.slip.advice);
    setCount((count) => count + 1);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  */

  const fetchAdvice = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    // console.log(data.slip.advice);
    setFetchData(data);
  };

  const getAdvice = () => {
    fetchAdvice(); // when the button clicked get a new advice
    setAdvice(fetchData.slip.advice);
    setCount((count) => count + 1);
  };

  useEffect(() => {
    fetchAdvice();
  }, []);


  return (
    <div className="App">
      <h1>Hello World!</h1>
      <h2>{advice}</h2>
      <button onClick={getAdvice}>Get Advice</button>
      <p>
        You have read <strong>{count}</strong> pieces of advice.
      </p>
    </div>
  );
}

export default App;
