import React from 'react';
import { useParams } from 'react-router';
import useBooking from '../../../Hooks/useBooking';
import usePackages from '../../../Hooks/usePackages';
import BookingDetail from '../BookingDetail/BookingDetail';
import BookingPlace from './../BookingPlace/BookingPlace'

const Booking = () => {
    const [packages] = usePackages();
    const [bookingPlace] = useBooking();
    const spinnerStyle = {
      width: "3rem",
      height: "3rem",
    };
    return (
      <div>
        <div>
          {!packages ? (
            <div className="text-center my-5 py-5">
              <div
                className="spinner-grow color-1 mt-5"
                style={spinnerStyle}
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <div>
              {bookingPlace?.map((bookingDetail) => (
                <BookingDetail
                  key={bookingDetail.id}
                  bookingDetail={bookingDetail}
                ></BookingDetail>
              ))}
            </div>
          )}
        </div>
      </div>
    );
};

export default Booking;