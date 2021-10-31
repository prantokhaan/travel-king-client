import React, { useState } from 'react';
import usePhotos from '../../../Hooks/usePhotos';
import Photo from '../Photo/Photo';
import './Photos.css'

const Photos = () => {
    const [photos, setPhotos] = usePhotos();
    const spinnerStyle = {
      width: "3rem",
      height: "3rem",
    };
    return (
      <div>
        {/* Heading  */}
        <h1 className="heading">
          <span>G</span>
          <span>A</span>
          <span>L</span>
          <span>L</span>
          <span>E</span>
          <span>R</span>
          <span>Y</span>
        </h1>

        {/* Spinner and Photos  */}
        {!photos.length ? (
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
          <div className="photos">
            {photos.map((photo) => (
              <Photo key={photo.id} photo={photo}></Photo>
            ))}
          </div>
        )}
      </div>
    );
};

export default Photos;