import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';
import './Navbar.css'

const Navbar = () => {
  const {user, logOut} = useFirebase();
  // NavBar Style
  const navLinkStyle = {
    textDecoration: "none",
    color: "black",
    margin: "10px",
    padding: "10px 0",
    fontSize: "16px",
  };
  return (
    <div className="sticky-navbar">
      <nav className="navbar ">
        <div className="d-flex container-fluid">
          <div className="ms-5 text-uppercase d-flex">
            <i className="fas fa-suitcase-rolling ps-4 pe-2"></i>

            {/* Logo  */}
            <Link to="/" className="text-decoration-none color-2 logo-link">
              <h3 className="logo">
                Trav<span className="color-1 logo">E</span>l Ki
                <span className="color-1 logo">N</span>g
              </h3>
            </Link>
          </div>
          {/* Navigation Child  */}
          <div className=" pe-3 d-md-flex navbar-links">
            <NavLink style={navLinkStyle} to="/home">
              Home
            </NavLink>
            <NavLink style={navLinkStyle} to="/packages">
              Packages
            </NavLink>
            <NavLink style={navLinkStyle} to="/gallery">
              Gallery
            </NavLink>
            <NavLink style={navLinkStyle} to="/about">
              About Us
            </NavLink>
            <NavLink style={navLinkStyle} to="/contact">
              Contact Us
            </NavLink>

            {/* Conditional Button  */}
            <div className="mt-2 conditional-button">
              {user.email || user.displayName ? (
                <div className="d-flex">
                  <div class="dropdown">
                    <button
                      class="secondary-button me-2 mt-1 text-capitalize"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {user.displayName} <i className="fas fa-sort-down"></i>
                    </button>
                    <div
                      class="dropdown-menu bg-1 box-shadow"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <div>
                        <Link class="dropdown-item" to="/my-profile">
                          My Profile
                        </Link>
                      </div>
                      <div>
                        <Link class="dropdown-item" to="/my-bookings">
                          My Bookings
                        </Link>
                      </div>
                      <div>
                        <Link class="dropdown-item" to="/manage-bookings">
                          Manage Bookings
                        </Link>
                      </div>
                      <div>
                        <Link class="dropdown-item" to="/add-service">
                          Add a New Service
                        </Link>
                      </div>
                      <hr className="dropdown-divider" />
                      <div>
                        <Link
                          onClick={logOut}
                          class="dropdown-item"
                          to="/manage-bookings"
                        >
                          Log Out
                        </Link>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={logOut}
                    className="primary-button ms-0 transition"
                  >
                    <i className="fas fa-unlock"></i> LogOut
                  </button>
                </div>
              ) : (
                <div>
                  <NavLink to="/login">
                    <button className="primary-button transition">
                      <i className="fas fa-lock"></i> Login
                    </button>
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;