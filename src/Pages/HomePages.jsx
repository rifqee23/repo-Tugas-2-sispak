import { useEffect } from "react";
import { SidebarWithContentSeparator } from "@/components/ui/Sidebar.jsx";
import { StickyNavbar } from "@/components/ui/Nav.jsx";
import { useState } from "react";

const HomePages = () => {
  const [isMdScreen, setIsMdScreen] = useState(false);

  const handleMdScreen = () => {
    setIsMdScreen(window.innerWidth >= 768);
  };
  useEffect(() => {
    handleMdScreen();
    window.addEventListener("resize", handleMdScreen);
    return () => window.removeEventListener("resize", handleMdScreen);
  }, []);
  return (
    <div className="md:flex">
      <div>
        {isMdScreen ? <SidebarWithContentSeparator /> : <StickyNavbar />}
      </div>
      <div>HomePages</div>
    </div>
  );
};

export default HomePages;
