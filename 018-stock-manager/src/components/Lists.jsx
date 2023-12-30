import { recentAddedList, lowStockList } from "../loader/products"
import { inventoryItems } from "../../public/stock.json"
import { Link } from "react-router-dom"
export default function Lists() {
  
  return (
    <div id="lists">
      <div id="recentlyAdded">
        <div className="dark">
          <p>Recently Added</p>          
        </div>
        {/* Render the list of items added in the last 10 days using the recentAddedList function, passing in the inventoryItems array and returning the list to a map */}
        {recentAddedList(inventoryItems).map((item) => (
          <div key={item.id}>
            <label>{item.name}</label>
            <Link to={`/product/${item.id}`}><button className="see">See</button></Link>            
          </div>
          
        ))}
      </div>

      <div id="lowStock">
        <div className="dark">
          <p>Low Stock</p>
        </div>
        {/* Render the list of items with less than 10 in stock using the lowStock function, passing in the inventoryItems array and returning the list to a map */}
        {lowStockList(inventoryItems).map((item) => (
          <div key={item.id}>
            <label>{item.name}</label>
            <button className="see">See</button>
          </div>
        ))}
      </div>
    </div>
  )
}