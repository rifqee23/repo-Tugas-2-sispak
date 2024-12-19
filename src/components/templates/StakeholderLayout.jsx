import { useState, useEffect } from "react";
import NavigationStakeholder from "./NavigationStakeholder";
import { Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

const StakeholderLayout = () => {
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

  const username = user?.username ?? "Loading....";
  const email = user?.email;
  return (
    <div className="w-full lg:flex">
      <NavigationStakeholder />

      <div className="w-full bg-blue-gray-50 lg:ml-80">
        <div className="fixed left-0 right-0 top-0 z-50 hidden items-center justify-between bg-HIJAU px-8 py-4 lg:ml-80 lg:flex">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-semibold text-white drop-shadow-lg">
              Stakeholder
            </h1>
          </div>
          <div>
            <h1 className="text-white">{username}</h1>
            <h3 className="text-white">{email}</h3>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default StakeholderLayout;
