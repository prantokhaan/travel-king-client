import React from 'react';
import { Link } from 'react-router-dom';
import usePackages from '../../../Hooks/usePackages';
import './Package.css'

const Package = ({place}) => {
    const {name, image, country, _id, description} = place;

    return (
      <div>
        <div className="box">
          <img src={image} alt="" />
          <div className="content">
            <h3>
              <i className="fas fa-map-marker-alt"></i> {name}
              <span className="country">{country}</span>
            </h3>

            <p className="mt-4 praragraph">
              {description.slice(0, 200)}
              <Link to={`/place/${_id}`} className="text-decoration-none">
                <p className="text-primary">Read More</p>
              </Link>{" "}
            </p>

            <Link to={`/place/${_id}`}>
              <button className="secondary-button ms-0"><i className="fas fa-plane"></i> Book A Flight</button>
            </Link>
          </div>
        </div>

        {/* <div>
          <h2>{name}</h2>
          <h4>{country}</h4>
          <img src={image} alt="" width="200px" height="200px" />
          <br />
          <Link to={`/package/${id}`}>
            <button className="primary-button">Book Now</button>
          </Link>
        </div> */}
      </div>
    );
};

export default Package;