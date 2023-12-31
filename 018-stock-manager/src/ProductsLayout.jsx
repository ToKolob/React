import { Link, Outlet } from "react-router-dom";

export default function ProductsLayout() {
  return (
    <div className="ProductsLayout">
      <h1>Products</h1>
      <Link to="/Products"><button className="buttonLayout">All Products</button></Link>
      <Link to="/newProduct"><button className="buttonLayout">New Product</button></Link>
      <Outlet />
    </div>
  )
}