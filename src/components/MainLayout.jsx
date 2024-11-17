import { Outlet } from "react-router-dom";
import Navigation from "@/components/Navigation.jsx";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";

const MainLayout = () => {
  return (
    <div className="w-full lg:flex">
      <Navigation />

      <div className="w-full bg-blue-gray-50 lg:ml-80  ">
        <div className="hidden fixed right-0 top-0 left-0 lg:flex items-center justify-between bg-blue-200 px-8 py-4 lg:ml-80 z-50">
          <RxHamburgerMenu />
          <div className="flex items-center gap-x-4">
            <p>Hi, Danira</p>
            <CgProfile size={24} />
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
