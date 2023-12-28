import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import January from "./pages/January";
import RouteLayout from "./pages/RouteLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      }
      ,
      {
        path: "/january",
        element: <January/>
      }
    ]
  },
]) ;
