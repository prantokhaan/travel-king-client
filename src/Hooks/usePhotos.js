import { useEffect, useState } from "react";

const usePhotos = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/photos")
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);
  return [photos, setPhotos];
};

export default usePhotos;
