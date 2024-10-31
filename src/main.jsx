import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePages from "./Pages/HomePages.jsx";
import SupplierPages from "./Pages/SupplierPages.jsx";
import ProductPages from "./Pages/ProductPages.jsx";
import StackholderPages from "./Pages/StackholderPages.jsx";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "@material-tailwind/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePages />,
      },
      {
        path: "/supplier",
        element: <SupplierPages />,
      },
      {
        path: "/product",
        element: <ProductPages />,
      },
      {
        path: "/stackholder",
        element: <StackholderPages />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
