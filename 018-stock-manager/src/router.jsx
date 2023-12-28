import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Product from "./pages/Product";

// Router configuration, with loader and errorElements
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      {
        path: "/",
        element: <Dashboard/>
      },
      {
        path: "/products",
        element: <Products/>
      },
      {
        path: "/products/:id",
        element: <Product/>        
      }
    ]
  }
])