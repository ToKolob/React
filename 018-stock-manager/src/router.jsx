import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Product from "./pages/Product";
import ProductsLayout from "./ProductsLayout";
import NewProduct from "./pages/NewProduct";
import { loadProducts } from "./loader/products";

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
        path: "/",
        element: <ProductsLayout/>,
        children: [
          {
            path: "Products",
            element: <Products/>
          },
          {
            path: "newProduct",
            element: <NewProduct/>
          },
          {
            path: "product/:id",
            element: <Product/>,
            loader: loadProducts
          }          
        ]
      }
    ]
  }
])