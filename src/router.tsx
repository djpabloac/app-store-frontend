import { createBrowserRouter } from "react-router-dom";
import ClientPage from './pages/Client'
import ProductPage from "./pages/Product";
import OrderPage from "./pages/Order";
import Navbar from "./components/Navbar";
import MainPage from "./pages/Main";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Navbar,
    children: [
      {
        index: true,
        element: <MainPage />
      },
      {
        index: true,
        path: '/clients',
        element: <ClientPage />
      },
      {
        path: '/products',
        element: <ProductPage />
      },
      {
        path: '/orders',
        element: <OrderPage />
      }
    ]
  },
])

export default router
