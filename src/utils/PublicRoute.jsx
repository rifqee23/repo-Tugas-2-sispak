import React from "react";
import { Navigate } from "react-router-dom";
import useAuthStore from "./authStore"; // Pastikan pathnya benar
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const PublicRoute = ({ children }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const token = Cookies.get("access_token");

  if (isAuthenticated) {
    const decodedToken = jwtDecode(token);
    const userRole = decodedToken.role;

    if (userRole === "SUPPLIER") {
      return <Navigate to="/supplier" replace={true} />;
    }
    if (userRole === "STAKEHOLDER") {
      return <Navigate to="/stakeholder" replace={true} />;
    }
  }

  return children; // Render halaman login/register jika belum login
};

export default PublicRoute;
