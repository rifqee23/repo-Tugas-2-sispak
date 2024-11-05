import { Outlet } from "react-router-dom";
import Navigation from "@/components/Navigation.jsx";

const MainLayout = () => {
  return (
    <div className="w-full md:flex">
      <Navigation />
      <div className="w-full px-2">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
