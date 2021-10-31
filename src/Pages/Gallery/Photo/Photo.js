import React from 'react';
import './Photo.css'

const Photo = ({photo}) => {
    const {img, location} = photo;
    return (

        // Gallery Image 
        <div className="gallery">
            <div className="box">
            <img src={img} alt="" />
            <div className="content">
                <h3>{location.place}</h3>
                <p>{location.country}</p>
            </div>
        </div>
        </div>
    );
};

export default Photo;