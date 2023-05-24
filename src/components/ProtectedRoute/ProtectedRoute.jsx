import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isLoged, redirectPath = "/login", children }) => {
  if (!isLoged) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export default ProtectedRoute;
