import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import AdminHome from "./pages/admin/AdminHome";
import RootLayout from "./pages/RootLayout";
import Product from "./pages/Product";
import loadProducts from "./loader/products";
import ProductBoundary from "./error-boundaries/ProductBoundary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,

      },
      {
        path: "/products/:productId",
        element: <Product />,
        loader: loadProducts,
        errorElement: <ProductBoundary />
        
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/admin",
        element: <AdminHome />,
      },
    ],
  }
])

export default router