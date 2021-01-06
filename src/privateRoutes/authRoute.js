import React from "react";
import { Route, Redirect } from "react-router-dom";

const AuthRoute = ({ children, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem("token") ? <Redirect to="/dashboard" /> : children
    }
  />
);

export default AuthRoute;
