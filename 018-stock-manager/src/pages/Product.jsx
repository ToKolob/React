import { Link, useLoaderData } from "react-router-dom";
export default function Product() {
  const { product } = useLoaderData()

  return (
    <div>
      <h3>{product.name}</h3>
      <button>Update</button>
      <button>Delete</button>

      <div className="dark">
        <p>{product.category}</p>
      </div>
      <div className="dark">
        <p>{product.quantityInStock}</p>
      </div>
      <p>{product.description}</p>
      <p>{product.dateAdded}</p>
      <Link to=".." relative="path">Back</Link>
    </div>
  )
}