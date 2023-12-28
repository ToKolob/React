import { calculateDiversity } from "../loader/products"
import { inventoryItems } from "../../public/stock.json"
import { useState, useEffect } from "react";

export default function KeyIndicators() {
  const [diversity, setDiversity] = useState(0)  
  useEffect(() => {
    // Calcular a diversidade ao montar o componente ou quando inventoryItems muda
    const newDiversity = calculateDiversity(inventoryItems);
    setDiversity(newDiversity);
  }, []);

  return (
    <div id="keyIndicators">
      <div className="dark">
        <p>Diversity of Products</p>
        <h3>{diversity}</h3>
      </div>
      <div className="dark">
        <p>Stock Levels</p>
        <h3>00</h3>
      </div>
      <div className="dark">
        <p>Recent Added</p>
        <h3>00</h3>
      </div>
      <div className="dark">
        <p>Low Stock</p>
        <h3>00</h3>
      </div>
    </div>
  )
}