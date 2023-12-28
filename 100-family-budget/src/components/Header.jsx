import { Link } from "react-router-dom";

export default function Header() {

  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/january">January</Link>
      <Link to="/february">February</Link>
      <Link to="/march">March</Link>
    </div>
  )
}