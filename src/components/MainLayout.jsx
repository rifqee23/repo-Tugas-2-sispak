import { Outlet } from "react-router-dom";
import Navigation from "@/components/Navigation.jsx";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

import Cookies from "js-cookie";

const MainLayout = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserFromToken = () => {
      try {
        const token = Cookies.get("access_token");
        if (token) {
          const decoded = jwtDecode(token);
          setUser(decoded);
        } else {
          console.log("Token tidak ditemukan");
        }
      } catch (error) {
        console.error("Gagal mendekode token:", error.message);
      }
    };

    fetchUserFromToken();
  }, []);
  return (
    <div className="w-full lg:flex">
      <Navigation />

      <div className="w-full bg-blue-gray-50 lg:ml-80  ">
        <div className="hidden fixed right-0 top-0 left-0 lg:flex items-center justify-between bg-blue-200 px-8 py-4 lg:ml-80 z-50">
          <RxHamburgerMenu />
          <div className="flex items-center gap-x-4">
            <p>Hi, {user?.username || "User"}!</p>{" "}
            {/* Tampilkan nama pengguna */}
            <CgProfile size={24} />
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
