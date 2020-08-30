import React from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../context/auth/authContext";
import { useContext } from "react";
const PrivateRoute = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;
  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated ? <Redirect to="/login" /> : <Component {...props} />
      }
    />
  );
};

export default PrivateRoute;
