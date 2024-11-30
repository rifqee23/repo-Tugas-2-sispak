import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import DashboardStakeholderPage from "./components/pages/DashboardStakeholderPage";
import DashboardSupplierPage from "./components/pages/DashboardSupplierPage";
import StakeholderTransaction from "./components/pages/StakeholderTransaction";
import StakeholderReportPage from "./components/pages/StakeholderReportPage";
import ProductPage from "./components/pages/ProductPage";
import SupplierTransactionPage from "./components/pages/SupplierTransactionPage";

import AuthLayout from "./components/templates/AuthLayout";
import StakeholderLayout from "./components/templates/StakeholderLayout";
import SupplierLayout from "./components/templates/SupplierLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={"/login"} />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },

  {
    path: "/stakeholder",
    element: <StakeholderLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={"/stakeholder/dashboard"} />,
      },
      {
        path: "dashboard",
        element: <DashboardStakeholderPage />,
      },
      {
        path: "transaction",
        element: <StakeholderTransaction />,
      },
      {
        path: "report",
        element: <StakeholderReportPage />,
      },
    ],
  },

  {
    path: "/supplier",
    element: <SupplierLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={"/supplier/dashboard"} />,
      },
      {
        path: "dashboard",
        element: <DashboardSupplierPage />,
      },
      {
        path: "product",
        element: <ProductPage />,
      },
      {
        path: "transaction",
        element: <SupplierTransactionPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
