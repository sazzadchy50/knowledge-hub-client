// import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
// import { AuthContext } from "../FirebaseAuth/AuthProvider";
import useAuth from "../Hook/useAuth";


const PrivateRoute = ({ children }) => {

  const {user, loading} = useAuth
  const location = useLocation();
  console.log(location);
  if (loading) {
    return <progress className="progress w-56"></progress>;
  }
  if (user) {
    return children;
  }

  return <Navigate state={location?.pathname} to="/login" replace></Navigate>;
};

export default PrivateRoute;