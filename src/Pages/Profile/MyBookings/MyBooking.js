import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';

const MyBooking = ({booking}) => {
    const {name, coverImage, description, status, _id, country, email, setIsCanceled} = booking;
    const {isLoading, setIsLoading}  = useFirebase();


    const handleCancelPlan = (id) => {
        const proceed = window.confirm(
          "Are you sure, you want to cancel this plan?"
        );
        if(proceed){
            fetch(`https://shrieking-goosebumps-13781.herokuapp.com/cancelBooking/${_id}`, {
                method: "DELETE",
                headers: {"content-type": "application/json"}
            })
            .then(res => res.json())
            .then(result => {
                if(result.deletedCount){
                    alert("Your plan has successfully cancelled");
                    setIsLoading(true);
                }
                setIsLoading(false);
            })
        }
    }

    
    return (
      <div className=" w-75 ms-5 ps-5">
        <div className="d-flex mb-0 h-50 w-100 border border-2 border-primary m-5 p-3 rounded-3 box-shadow">
          <div className="col-6">
            <img
              src={coverImage}
              alt=""
              width="90%"
              height="100%"
              className="rounded-2 border-light box-shadow border border-2"
            />
          </div>
          <div className="col-3 mt-4 border-end border-gray pe-2">
            <h3 className="mb-4 color-1">{name}</h3>
            <h6 className="mb-4">
              {" "}
              <i className="fas fa-map-marker-alt"></i> {""}
              {country}
            </h6>
            <p>{description.slice(0, 100)}</p>
          </div>
          <div className="col-3 mt-5">
            {status === "pending" ? (
              <div>
                <h5 className="bg-danger px-3 py-2 w-75 ms-5 rounded-2 text-light fs-6">
                  {" "}
                  <i className="fas fa-spinner"></i> {status}
                </h5>
              </div>
            ) : (
              <h5 className="bg-success px-3 py-2 w-75 ms-5 rounded-2 text-light fs-6 mt-5">
                {" "}
                <i className="fas fa-check-square"></i> {status}
              </h5>
            )}
            <h6 className="text-lowercase mt-4">Booked by: {email}</h6>
            <Link to={`/place/${_id}`}>
              <button className="bg-primary text-light btn ms-4 mt-3">
                View Details
              </button>
            </Link>
            <button
              onClick={() => handleCancelPlan(_id)}
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
    )
};

export default MyBooking;

  
