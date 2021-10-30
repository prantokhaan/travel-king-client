import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';
import './Footer.css';

const Footer = () => {
    const {user} = useFirebase();
  // Styles
  const socialLinkStyle = {
    display: "inline-block",
    border: "1px solid transparent",
    height: "35px",
    width: "35px",
    color: "#000",
    lineHeight: "35px",
    textAlign: "center",
    fontSize: "16px",
    transition: "all 0.5s ease",
    borderRadius: "50%",
  };
  const quickLinkStyle = {
    color: "black",
    padding: "8px 0",
    textTransform: "capitalize",
    fontSize: "16px",
    textDecoration: "none",
  };
  return (
    <div className="bg-light">
      <div className=" container row mx-auto p-4 mt-4">
        {/* About Us  */}
        <div className="col-md-4 footer-item px-5">
          <h2>About us</h2>
          <p className="text-capitalize text-left">
            Travel King helps you to find best tourism spot for you. And also
            book hotel, restaurant, spots for you. Thanks for staying with us.
          </p>
          {/* Social Icons  */}
          <div className="mt-3">
            <Link style={socialLinkStyle} to="#">
              <i className="fab fa-facebook"></i>
            </Link>
            <Link style={socialLinkStyle} to="#">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link style={socialLinkStyle} to="#">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link style={socialLinkStyle} to="#">
              <i className="fab fa-youtube"></i>
            </Link>
          </div>
        </div>
        {/* Quicklinks  */}
        <div className="col-md-4 footer-item px-5 quicklinks">
          <h2>Quicklinks</h2>
          <ul>
            <li>
              <Link style={quickLinkStyle} to="/packages">
                Packages
              </Link>
            </li>
            <li>
              <Link style={quickLinkStyle} to="/gallery">
                Gallery
              </Link>
            </li>
            <li>
              <Link style={quickLinkStyle} to="/contact">
                contact us
              </Link>
            </li>
            <li>
              <Link style={quickLinkStyle} to="/login">
                login
              </Link>
            </li>
          </ul>
        </div>
        {/* Contact Us  */}
        <div className="col-md-4 footer-item px-5">
          <h2>Contact us</h2>
          <p>
            <i className="fas fa-map-marker-alt"></i> Dhaka, Bangladesh
          </p>
          <p>
            <i className="fas fa-phone"></i> +8801856789856
          </p>
          <p className="text-lowercase">
            <i className="fas fa-envelope"></i> contact@travel.king
          </p>
        </div>
      </div>
      <p className="color-2 text-center">&copy; Travel King 2021</p>
      <p className="color-2 text-center">
        Developed by <span className="color-1">Pranto Khan &#9829;</span>{" "}
      </p>
    </div>
  );
};

export default Footer;