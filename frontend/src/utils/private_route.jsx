import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./auth_context";

/**
 * TODO: DOCU
 */


const PrivateRoute = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <p>...</p>;
  return user ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRoute;
