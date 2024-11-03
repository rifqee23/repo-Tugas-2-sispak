import { Outlet } from "react-router-dom";
import Nav from "@/components/Layouts.jsx";

function App() {
  return (
    <div className="w-full md:flex">
      <Nav />
      <div className="w-full px-2">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
