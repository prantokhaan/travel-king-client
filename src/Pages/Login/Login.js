import React from 'react';
import { Link, useLocation, useHistory } from "react-router-dom";
import useFirebase from '../../Hooks/useFirebase';
import './Login.css'

const Login = () => {
  const { signInUsingGoogle, error } = useFirebase();
  const location = useLocation();
  const history = useHistory();
  const redirect = location.state?.from || "/home";
  console.log(location)

  
  // Google Sign IN 
  const handleGoogleLogin = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect);
    });
  };

  return (
    <div className="text-center mt-5">
      {location.state?.from ? (
        <div>
          <h2 className="color-1">
            Please Login to go to {location.state?.from?.pathname.slice(1, 20)}
          </h2>
          <h6 className="color-2 mt-4">You don't need to register</h6>
        </div>
      ) : (
        <div>
          <h2 className="color-1">Login with just one click</h2>
          <h6 className="color-2 mt-4">No need to register</h6>
        </div>
      )}

      <div>
        <div className="p-5 bg-1 w-50 mx-auto my-5">
          <button className="googleButton" onClick={handleGoogleLogin}>
            <i className="fab fa-google"></i>oogle Sign In
          </button>
          <h6>{error}</h6>
        </div>
      </div>
    </div>
  );
};


export default Login;