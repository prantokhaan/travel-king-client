import { useEffect, useState } from "react";

const usePackages = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch("https://shrieking-goosebumps-13781.herokuapp.com/places")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, [packages?.length]);
  return [packages, setPackages];
};

export default usePackages;
