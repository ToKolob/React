import { Link } from "react-router-dom"
export default function Header() {
  return (
    <>
      <h1>Header</h1>
      <Link to="/">Home</Link>
      <Link to="/Cart">Cart</Link>
      <Link to="/Products">Products</Link>
    </>
  )
}