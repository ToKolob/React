import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function RouteLayout() {

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}