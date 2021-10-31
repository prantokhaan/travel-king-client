import React from 'react';
import useBooking from '../../../Hooks/useBooking';
import usePackages from '../../../Hooks/usePackages';
import BookingDetail from '../BookingDetail/BookingDetail';

const Booking = () => {
    const [packages] = usePackages();
    const [place] = useBooking();


    const spinnerStyle = {
      width: "3rem",
      height: "3rem",
    };
    return (
      <div>
        <div>
          {!packages.length ? (
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
              <BookingDetail place={place} />
            </div>
          )}
        </div>
      </div>
    );
};

export default Booking;