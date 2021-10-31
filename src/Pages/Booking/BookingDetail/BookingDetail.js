import React from 'react';
import Rating from 'react-rating';
import { useLocation, useHistory } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';
import './BookingDetail.css'

const BookingDetail = ({place}) => {
  const {user} = useFirebase();
  const location = useLocation();
  const history = useHistory();
  location.pathname = "/my-bookings"
  const redirect = location.pathname; 
    const {
      name,
      image,
      coverImage,
      rating,
      whyToGo,
      monthToVisit,
      country,
      _id,
      hotel1,
      hotel2,
      hotel3,
      spot1,
      spot2,
      spot3,
    } = place;

    const handleBookNow = () => {
       const bookedPlace = place;
       bookedPlace.email = user.email;
       bookedPlace.status = "pending";
       console.log(bookedPlace);
       fetch("http://localhost:5000/bookedPlace", {
         method: "POST",
         headers: { "content-type": "application/json" },
         body: JSON.stringify(bookedPlace),
       })
       .then(res => res.json())
       .then(result => {
         if (result.insertedId) {
           alert("Your booking placed Successfully");
           history.push(redirect);
         }
       })
    }
   
    return (
      <div>
        <div className="text-center booking-image">
          <img src={coverImage} alt="" width="100%" height="550px" />
        </div>
        <div className="booking-info">
          <h1>{name}</h1>
          <h3>One of The Best Place to visit in {country}</h3>
        </div>
        <div className="d-flex">
          <div>
            <div className="ms-5 booking-items">
              <div className="my-5">
                <h1 className="section-title">
                  Why to go to <span className="color-1">{name}</span>
                </h1>
                <hr />
                <h6>{whyToGo}</h6>
              </div>
            </div>
            <div className="ms-5 booking-items">
              <div className="my-5">
                <h1 className="section-title">
                  When to go to <span className="color-1">{name}</span>
                </h1>
                <hr />
                <h6>{monthToVisit}</h6>
              </div>
            </div>
            <div className="ms-5 booking-items d-flex justify-content-around">
              <div className="my-5 me-5">
                <h3 className="section-title">Best Hotels</h3>
                <hr />
                <h6 className="fs-4">
                  <i className="fas fa-hotel fs-6 me-3 color-1"></i>
                  {hotel1}
                </h6>
                <h6 className="fs-4">
                  <i className="fas fa-hotel fs-6 me-3 color-1"></i>
                  {hotel2}
                </h6>
                <h6 className="fs-4">
                  <i className="fas fa-hotel fs-6 me-3 color-1"></i>
                  {hotel3}
                </h6>
              </div>
              <div className="my-5 ms-5">
                <h3 className="section-title">Best Spots</h3>
                <hr />
                <h6 className="fs-4">
                  <i className="fas fa-map-marker-alt fs-6 me-3 color-1"></i>
                  {spot1}
                </h6>
                <h6 className="fs-4">
                  <i className="fas fa-map-marker-alt fs-6 me-3 color-1"></i>
                  {spot2}
                </h6>
                <h6 className="fs-4">
                  <i className="fas fa-map-marker-alt fs-6 me-3 color-1"></i>
                  {spot3}
                </h6>
              </div>
              <div className="my-5 ms-5">
                <h3 className="section-title">Rating</h3>
                <hr />
                <Rating
                  initialRating={rating}
                  emptySymbol={<i className="far fa-star color-1"></i>}
                  fullSymbol={<i className="fas fa-star color-1"></i>}
                  readonly
                ></Rating>
              </div>
            </div>
            <div className="text-center mb-5">
              {/* Book Now Button  */}
              <button onClick={handleBookNow} className="primary-button px-5">
                <i className="fas fa-plus"></i> Book Now
              </button>
            </div>
          </div>
          <div className="booking-image">
            <div className="ms-5">
              <img src={image} alt="" height="700px" width="400px" />
            </div>
            <br />

            {/* Book Now Button  */}

            <button onClick={handleBookNow} className="primary-button">
              {" "}
              <i className="fas fa-plus"></i> Book Now
            </button>
          </div>
        </div>
      </div>
    );
};

export default BookingDetail;