import React from "react";
import NavigationStakeholder from "./NavigationStakeholder";
import { Outlet } from "react-router-dom";

const StakeholderLayout = () => {
  return (
    <div className="w-full lg:flex">
      <NavigationStakeholder />

      <div className="w-full bg-blue-gray-50 lg:ml-80">
        <div className="fixed left-0 right-0 top-0 z-50 hidden items-center justify-between bg-blue-200 px-8 py-4 lg:ml-80 lg:flex">
          {/* <RxHamburgerMenu /> */}
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default StakeholderLayout;
