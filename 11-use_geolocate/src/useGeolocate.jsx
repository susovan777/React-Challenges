import { useState } from "react";

const useGeolocate = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  const getPosition = () => {
    setIsLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    }

    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setLocation({ latitude, longitude });
      setIsLoading(false);
      //   console.log(latitude, longitude);
    }

    function error(error) {
      setIsLoading(false);
      setError(error.message);
      console.log(error.message);
    }
  };

  return { isLoading, location, getPosition, error };
};

export { useGeolocate };
