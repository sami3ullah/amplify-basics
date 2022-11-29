import React from "react";
import { Navigate } from "react-router-dom";
import { LOGIN } from "../utils/routes";

const ProtectedRoute = ({ children }: { children: React.ReactElement }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to={LOGIN} replace />;
};

export default ProtectedRoute;
