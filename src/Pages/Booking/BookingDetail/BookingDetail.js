import React from 'react';
import Rating from 'react-rating';
import { Link, NavLink } from 'react-router-dom';
import './BookingDetail.css'

const BookingDetail = ({bookingDetail}) => {
    const {
      name,
      image,
      coverImage,
      rating,
      services,
      whyToGo,
      monthToVisit,
      country,
      id
    } = bookingDetail;
    const navLinkStyle = {
      textDecoration: "none",
      color: "black",
      margin: "10px 0",
      padding: "10px 10px",
      fontSize: "16px",
      borderRight: "1px solid black",
      borderLeft: "1px solid black",
      
    };
    return (
      <div>
        <div className="text-center booking-image">
          <img src={coverImage} alt="" width="100%" height="550px" />
        </div>
        <div className="booking-info">
          <h1>{name}</h1>
          <h3>The Best Place to visit in {country}</h3>
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
                  {services.hotels[0]}
                </h6>
                <h6 className="fs-4">
                  <i className="fas fa-hotel fs-6 me-3 color-1"></i>
                  {services.hotels[1]}
                </h6>
                <h6 className="fs-4">
                  <i className="fas fa-hotel fs-6 me-3 color-1"></i>
                  {services.hotels[2]}
                </h6>
              </div>
              <div className="my-5 ms-5">
                <h3 className="section-title">Best Spots</h3>
                <hr />
                <h6 className="fs-4">
                  <i className="fas fa-map-marker-alt fs-6 me-3 color-1"></i>
                  {services.thingsToDo[0]}
                </h6>
                <h6 className="fs-4">
                  <i className="fas fa-map-marker-alt fs-6 me-3 color-1"></i>
                  {services.thingsToDo[1]}
                </h6>
                <h6 className="fs-4">
                  <i className="fas fa-map-marker-alt fs-6 me-3 color-1"></i>
                  {services.thingsToDo[2]}
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
              <Link to={`/booking-place/${id}`}>
                <button className="primary-button px-5"><i className="fas fa-plus"></i> Book Now</button>
              </Link>
            </div>
          </div>
          <div className="booking-image">
            <div className="ms-5">
              <img src={image} alt="" height="700px" width="400px" />
            </div>
            <br />
            <Link to={`/booking-place/${id}`}>
              <button className="primary-button"> <i className="fas fa-plus"></i> Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default BookingDetail;