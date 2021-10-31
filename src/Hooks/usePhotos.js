import { useEffect, useState } from "react";

const usePhotos = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch("https://shrieking-goosebumps-13781.herokuapp.com/photos")
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);
  return [photos, setPhotos];
};

export default usePhotos;
