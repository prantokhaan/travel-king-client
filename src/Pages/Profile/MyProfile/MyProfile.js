import React from 'react';
import useFirebase from '../../../Hooks/useFirebase';
import './MyProfile.css';

const MyProfile = () => {
  // Email, Phone Number
  const { user, logOut } = useFirebase();
  console.log(user);
  return (
    <div>
      <div class="bio">
        <div class="profile-image">
          <img src={user.photoURL} alt="" width="300px" />
        </div>
        <div class="ms-5 mt-5">
          <h3 class="bio-text">{user.displayName}</h3>

          <div className="d-flex">
            <div class="user-email px-3 py-2 text-bolder mt-4 rounded-pill me-4 text-lowercase">
              <i class="fas fa-envelope"></i> {user.email}
            </div>
            <button
            onClick={logOut} 
            class="user-email px-3 py-2 text-bolder mt-4 rounded-pill me-4">
              <i class="fas fa-sign-out-alt"></i> Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;