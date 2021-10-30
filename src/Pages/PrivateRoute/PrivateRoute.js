import React from "react";
import { Route, Redirect } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useFirebase();

  const spinnerStyle =  {
    width: "3rem",
    height: "3rem"
  }
  if (isLoading) return (
    <div className="text-center my-5 py-5">
      <div
        className="spinner-grow color-1 mt-5"
        style={spinnerStyle}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email || user.displayName ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          ></Redirect>
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
