import React from 'react';
import useBooking from '../../../Hooks/useBooking';
import usePackages from '../../../Hooks/usePackages';

const BookingPlace = () => {
    const [packages] = usePackages();
    const [place] = useBooking();
    const { name } = place;

    const spinnerStyle = {
      width: "3rem",
      height: "3rem",
    };

    return (
      <div>
        {/* <div>
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
              <ConfirmBooking place={place} />
            </div>
          )}
        </div> */}
      </div>
    );
};

export default BookingPlace;