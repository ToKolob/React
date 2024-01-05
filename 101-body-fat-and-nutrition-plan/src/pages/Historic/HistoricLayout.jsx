import { Outlet, Link } from "react-router-dom"
export default function HistoricLayout() {
  return (
    <div>
      <Link to="new"> NewHistoric</Link>
      <Link to=""> HistoricList</Link>
      <Outlet />
    </div>
  )
}