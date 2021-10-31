import React, { useEffect, useState } from 'react';
import MyBooking from './MyBooking.js'
import useFirebase from '../../../Hooks/useFirebase';
import { Link } from 'react-router-dom';


const MyBookings = () => {
    const {user} = useFirebase();
    const [booking, setBooking] = useState();
    const [isCanceled, setIsCanceled] = useState(null);


    useEffect( () => {
        fetch(`http://localhost:5000/myBookings/${user.email}`)
          .then((res) => res.json())
          .then((result) => setBooking(result));
          console.log(booking)
    }, [booking?.length]);

    const spinnerStyle = {
      width: "3rem",
      height: "3rem",
    };

     const handleCancelPlan = (id) => {
       const proceed = window.confirm(
         "Are you sure, you want to cancel this plan?"
       );
       if (proceed) {
         fetch(`http://localhost:5000/cancelBooking/${id}`, {
           method: "DELETE",
           headers: { "content-type": "application/json" },
         })
           .then((res) => res.json())
           .then((result) => {
             console.log(result)
             if (result.deletedCount) {
               alert("Your plan has successfully cancelled");
               const remainingPlan = booking.filter(plan => plan._id !== id);
               setBooking(remainingPlan);
             }
           });
       }
     };

    return (
      <div>
        {!booking?.length ? (
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
          <div className="text-center">
            <div>
              <h2 className="mt-5">
                Total <span className="color-1">{booking?.length} </span> Places
                booked by <span className="color-1">{user.displayName} </span>
              </h2>
            </div>
            <div className="container-fluid ms-5">
              {booking.map((booking) => (
                <div key={booking._id}>
                  <div className=" w-75 ms-5 ps-5">
                    <div className="d-flex mb-0 h-50 w-100 border border-2 border-primary m-5 p-3 rounded-3 box-shadow">
                      <div className="col-6">
                        <img
                          src={booking.coverImage}
                          alt=""
                          width="90%"
                          height="100%"
                          className="rounded-2 border-light box-shadow border border-2"
                        />
                      </div>
                      <div className="col-3 mt-4 border-end border-gray pe-2">
                        <h3 className="mb-4 color-1">{booking.name}</h3>
                        <h6 className="mb-4">
                          {" "}
                          <i className="fas fa-map-marker-alt"></i> {""}
                          {booking.country}
                        </h6>
                        <p>{booking.description.slice(0, 100)}</p>
                      </div>
                      <div className="col-3 mt-5">
                        {booking.status === "pending" ? (
                          <div>
                            <h5 className="bg-danger px-3 py-2 w-75 ms-5 rounded-2 text-light fs-6">
                              {" "}
                              <i className="fas fa-spinner"></i>{" "}
                              {booking.status}
                            </h5>
                          </div>
                        ) : (
                          <h5 className="bg-success px-3 py-2 w-75 ms-5 rounded-2 text-light fs-6 mt-5">
                            {" "}
                            <i className="fas fa-check-square"></i>{" "}
                            {booking.status}
                          </h5>
                        )}
                        <h6 className="text-lowercase mt-4">
                          Booked by: {booking.email}
                        </h6>
                        <Link to={`/place/${booking._id}`}>
                          <button className="bg-primary text-light btn ms-4 mt-3">
                            View Details
                          </button>
                        </Link>
                        <button
                          onClick={() => handleCancelPlan(booking._id)}
                          className="bg-danger text-light btn ms-4 mt-3"
                        >
                          Cancel This Plan
                        </button>
                      </div>
                    </div>
                    <Link to="/packages">
                      <button className="bg-primary text-light btn ms-4 mt-5 px-5">
                        Book More
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
};

export default MyBookings;