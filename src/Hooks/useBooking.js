import { useEffect, useState } from "react";
import { useParams } from "react-router"
import usePackages from "./usePackages";

const useBooking = () => {
    const {bookingId} = useParams();
    const [place, setPlace] = useState({});

     useEffect(() => {
       fetch(
         `https://shrieking-goosebumps-13781.herokuapp.com/place/${bookingId}`
       )
         .then((res) => res.json())
         .then((data) => setPlace(data));
     }, []);

    // const [packages] = usePackages();
    // let bookingPlace = [];
    // if(packages.length){
    //     const bookingConfirm = packages.find(place => place._id === parseInt(bookingId))
    //     bookingPlace.push(bookingConfirm);
    // }
    return [place];
}
export default useBooking;