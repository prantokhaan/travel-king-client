import React from 'react';
import { useParams } from 'react-router';
import useBooking from '../../../Hooks/useBooking';
import usePackages from '../../../Hooks/usePackages';
import ConfirmBooking from '../ConfirmBooking/ConfirmBooking';

const BookingPlace = () => {
    const [bookingPlace] = useBooking();

    return (
        <div>
           {
               bookingPlace?.map(bookingPlace => <ConfirmBooking
               key={bookingPlace.id}
               bookingPlace={bookingPlace}
               ></ConfirmBooking>)
           }
        </div>
    );
};

export default BookingPlace;