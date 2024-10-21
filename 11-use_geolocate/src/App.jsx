import { useState } from "react";
const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setIsLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    }

    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setLocation({ latitude, longitude });
      setIsLoading(false);
      setCount((prev) => prev + 1);
      console.log(latitude, longitude);
    }
    
    function error() {
      setIsLoading(false);
      console.log("Unable to retrieve your location");
    }
  };
  // console.log(location.latitude);
  return (
    <>
      <button onClick={handleClick}>Get my position</button>
      {isLoading && <p>Fetching location...</p>}
      {location && (
        <p>
          Your GPS position: {location.latitude}, {location.longitude}
        </p>
      )}
      {/* {success && <p>User denied</p>} */}

      <p>You requested position {count} times</p>
    </>
  );
};

export default App;
