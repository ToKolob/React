import { useLoaderData } from "react-router-dom"
import { deleteProduct } from "../loader/products"



export default function Product() {
  const product = useLoaderData()

  return (
    <div id="product">
      <div className="row">
        <h3>{product.name}</h3>
        <button className="update">Update</button>
        <button className="delete" onClick={() => deleteProduct(product.id)}>Delete</button>
      </div>
      <div className="row">
        <div className="dark">
          <p>{`Category: ${product.category}`}</p>
        </div>
        <div className="dark">
          <p>{`Quantity in Stock: ${product.quantityInStock}`} </p>
        </div>
        <div className="dark">
          <p>{`Price: ${product.price}`}</p>
        </div>
      </div>

      <p>Description: {product.description || "No description available"}</p>
      <p>Date Added: {product.dateAdded}</p>
      <p>Date Modified: {product.dateModified}</p>
    </div>
  )
}



