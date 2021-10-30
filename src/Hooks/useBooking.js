import { useParams } from "react-router"
import usePackages from "./usePackages";

const useBooking = () => {
    const {bookingId} = useParams();
    const [packages] = usePackages();
    let bookingPlace = [];
    if(packages.length){
        const bookingConfirm = packages.find(place => place.id === parseInt(bookingId))
        bookingPlace.push(bookingConfirm);
    }
    return [bookingPlace]
}
export default useBooking;