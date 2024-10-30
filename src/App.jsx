import { Outlet } from "react-router-dom";
import HomePages from "./Pages/HomePages";
import Nav from "@/components/Layouts.jsx";

function App() {
  return (
    <div className="w-full md:flex">
      <Nav />
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
