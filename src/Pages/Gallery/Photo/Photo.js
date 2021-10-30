import React from 'react';
import './Photo.css'

const Photo = ({photo}) => {
    const {img, location} = photo;
    return (
        <div className="gallery">
            <div class="box">
            <img src={img} alt="" />
            <div class="content">
                <h3>{location.place}</h3>
                <p>{location.country}</p>
            </div>
        </div>
        </div>
    );
};

export default Photo;