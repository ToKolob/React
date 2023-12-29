import { Link } from "react-router-dom";
import { inventoryItems } from "../../public/stock.json";
export default function Products() {

  //list of products in table format with id, name, quantity in stock, category, date added and 2 buttons to edit and delete.
  //The data is stored in stock.json
  return (
    <div>
      {/* Table header */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity in Stock</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
      {/* Render a table with the list of products using a map */}
      <tbody>
        {inventoryItems.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.quantityInStock}</td>
            <td>{item.category}</td>
            <td> 
              <Link to={`/product/${item.id}`}><button className="see">See</button> </Link>
              
              <button>Update</button> 
              <button className="delete">Delete</button></td>
          </tr>        
        ))}
      </tbody>
      </table>

      
    </div>
  )
}