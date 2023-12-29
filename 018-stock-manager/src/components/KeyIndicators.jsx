import { calculateDiversity, stockLevel, recentAdded, lowStock } from "../loader/products"
import { inventoryItems } from "../../public/stock.json"
import { useState, useEffect } from "react";

export default function KeyIndicators() {
  const [diversity, setDiversity] = useState(0)  
  useEffect(() => {
    // Calculate the diversity of products
    const newDiversity = calculateDiversity(inventoryItems);
    setDiversity(newDiversity);
  }, []);

  //Calculate stock level of products
  const [stock, setStock] = useState(0);
  useEffect(() => {
    // Calculate the stock level of products
    const newStock = stockLevel(inventoryItems);
    setStock(newStock);
  }, []);

  //Calculate recent added products
  const [recent, setRecent] = useState(0);
  useEffect(() => {
    // Calculate the recent added products
    const newRecent = recentAdded(inventoryItems);
    setRecent(newRecent);
  }, []);

  //Calculate low stock products
  const [low, setLow] = useState(0);
  useEffect(() => {
    // Calculate the low stock products
    const newLow = lowStock(inventoryItems);
    setLow(newLow);
  }, []);



  return (
    <div id="keyIndicators">
      <div className="dark">
        <p>Diversity of Products</p>
        <h3>{diversity}</h3>
      </div>

      <div className="dark">
        <p>Stock Levels</p>
        <h3>{stock}</h3>
      </div>

      <div className="dark">
        <p>Recent Added</p>
        <h3>{recent}</h3>
      </div>

      <div className="dark">
        <p>Low Stock</p>
        <h3>{low}</h3>
      </div>
    </div>
  )
}