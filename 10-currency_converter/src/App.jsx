import { useEffect, useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [amount, setAmount] = useState(1);
  const [curFrom, setCurFrom] = useState("CAD");
  const [curTo, setCurTo] = useState("INR");

  useEffect(() => {
    const fetchCurrency = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${curFrom}&to=${curTo}`
        );
        const data = await res.json();
        setResult(data.rates[curTo]);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };

    if (curFrom === curTo) {
      return setResult(amount);
    }
    fetchCurrency();
  }, [curFrom, amount, curTo]);

  return (
    <div>
      <select
        value={curFrom}
        onChange={(e) => setCurFrom(e.target.value)}
        disabled={loading}
      >
        <option>CAD</option>
        <option>EUR</option>
        <option>INR</option>
        <option>USD</option>
      </select>

      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        disabled={loading}
      />

      <select
        value={curTo}
        onChange={(e) => setCurTo(e.target.value)}
        disabled={loading}
      >
        <option>CAD</option>
        <option>EUR</option>
        <option>INR</option>
        <option>USD</option>
      </select>

      <br />
      <br />
      <p>
        {result} {curTo}
      </p>
    </div>
  );
};

export default App;
