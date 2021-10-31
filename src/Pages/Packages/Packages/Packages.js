import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import usePackages from '../../../Hooks/usePackages';
import Package from '../Package/Package';
import './Packages.css'

const Packages = () => {
    const [packages] = usePackages();
    console.log(packages)
    const spinnerStyle = {
      width: "3rem",
      height: "3rem",
    };
    
    return (
      <div>
        <h1 className="heading">
          <span>P</span>
          <span>A</span>
          <span>C</span>
          <span>K</span>
          <span>A</span>
          <span>G</span>
          <span>E</span>
          <span>S</span>
        </h1>
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
          <div className="packages">
            {packages.map((place) => (
              <Package key={place.id} place={place}></Package>
            ))}
          </div>
        )}
      </div>
    );
};

export default Packages;