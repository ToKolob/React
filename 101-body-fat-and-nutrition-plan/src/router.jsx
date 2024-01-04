import { createBrowserRouter } from "react-router-dom";
import Rootlayout from "./pages/RootLayout";
import Home from "./pages/Home";
import HistoricLayout from "./pages/Historic/HistoricLayout";
import HistoricList from "./pages/Historic/HistoricList";
import NewHistoric from "./pages/Historic/NewHistoric";
import DetailHistoric from "./pages/Historic/DetailHistoric";
import EditHistoric from "./pages/Historic/EditHistoric";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "historic",
        element: <HistoricLayout/>,
        children: [
          {
            path: "",
            element: <HistoricList/>
          },
          {
            path: "new",
            element: <NewHistoric />
          },
          {
            path: ":id",
            element: <DetailHistoric />
          },
          {
            path: ":id/edit",
            element: <EditHistoric />
          }
        ]
      }
    ]
  } ])

  export default router
