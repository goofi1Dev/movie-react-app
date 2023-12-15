import React from "react";
import { useAppContext } from "../context/AppContextProvider";
import { Navigate } from "react-router-dom";
import routes from "../constants/routes";

const AuthGuard = ({ children }) => {
  const {
    state: { isUserAuthenticated },
  } = useAppContext();

  if (!isUserAuthenticated) {
    return (
      <div>
        <Navigate to={routes.signin} />
      </div>
    );
  }
  return <>{children} </>;
};

export default AuthGuard;
