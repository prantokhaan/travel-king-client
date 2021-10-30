import { useEffect, useState } from "react";

const usePhotos = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/prantokhaan/tourData/main/galleryData.json"
    )
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);
  return [photos, setPhotos];
};

export default usePhotos;
