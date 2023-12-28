
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Stock Manager</h1>
      <div>
        <Link to="/">Dashboard</Link>
        <Link to="/products">Products</Link>
      </div>
    </header>
  )
}