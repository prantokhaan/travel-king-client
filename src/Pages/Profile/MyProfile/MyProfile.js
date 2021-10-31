import React from 'react';
import useFirebase from '../../../Hooks/useFirebase';
import './MyProfile.css';

const MyProfile = () => {
  // Email, Phone Number
  const { user, logOut } = useFirebase();
  console.log(user);
  return (
    <div>
      <div className="bio">
        <div className="profile-image">
          <img src={user.photoURL} alt="" width="300px" />
        </div>
        <div className="ms-5 mt-5">
          <h3 className="bio-text">{user.displayName}</h3>

          <div className="d-flex">
            <div className="user-email px-3 py-2 text-bolder mt-4 rounded-pill me-4 text-lowercase">
              <i className="fas fa-envelope"></i> {user.email}
            </div>
            <button
            onClick={logOut} 
            className="user-email px-3 py-2 text-bolder mt-4 rounded-pill me-4">
              <i className="fas fa-sign-out-alt"></i> Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;