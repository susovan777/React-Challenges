import { useState } from "react";
import { useGeolocate } from "./useGeolocate";
const App = () => {
  const [count, setCount] = useState(0);

  const { isLoading, location, getPosition, error } = useGeolocate();

  const handleClick = () => {
    setCount((prev) => prev + 1);
    getPosition();
  };

  return (
    <>
      <button onClick={handleClick} disabled={isLoading}>
        Get my position
      </button>
      {isLoading && <p>Fetching location...</p>}
      {error && <p>{error}</p>}
      {location && (
        <p>
          Your GPS position: {location.latitude}, {location.longitude}
        </p>
      )}

      <p>You requested position {count} times</p>
    </>
  );
};

export default App;
