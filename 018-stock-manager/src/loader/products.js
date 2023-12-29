import inventoryItems from "../../public/stock.json";

function loadProducts({params}) {
  console.log(inventoryItems);
  const product = inventoryItems.find((item) => item.id === +params.id);

  if (!product) {
    throw new Error("Product not found");
  }

  return product;
}

const calculateDiversity = function(inventory) {
  console.log("Calculating diversity...");
  
  // Check if the inventory list exists and is not empty
  if (inventory && inventory.length > 0) {
    // Create a set to store unique categories
    const uniqueCategories = new Set();

    // Iterate over the list of items and add each unique category to the set
    inventory.forEach((item) => {
      if (item.category) {
        uniqueCategories.add(item.category);
      }
    });

    // Return the number of unique categories
    return uniqueCategories.size;
  } else {
    console.log("Inventory list does not exist or is empty");
    // Return 0 if the list of items is empty or does not exist
    return 0;
  }
}

const stockLevel = function(inventory) {
  // Calculate the total quantity of items in stock
  const totalQuantity = inventory.reduce((sum, item) => sum + item.quantityInStock, 0);
  
  // Return the total quantity
  return totalQuantity;  
}

const recentAdded = function(inventory) {
  // Calculate the items added in the last 10 days, summing their quantities
  const itemsAddedInLast10Days = inventory.filter((item) => {
      const dateAdded = new Date(item.dateAdded);
      const tenDaysAgo = new Date();
      tenDaysAgo.setDate(tenDaysAgo.getDate() - 10);
      return dateAdded > tenDaysAgo;
    }).reduce((sum, item) => sum + item.quantityInStock, 0);

  // Return the items added in the last 10 days
  return itemsAddedInLast10Days;
}

const lowStock = function(inventory) {
  // Calculate the total of items with less than 10 in stock
  const totalQuantity = inventory.reduce((sum, item) => sum + (item.quantityInStock < 10 ? 1 : 0), 0);
  // Return the total
  return totalQuantity;
}

const recentAddedList = function(inventory) {
  // Return the list of items added in the last 10 days
  return inventory.filter((item) => {
      const dateAdded = new Date(item.dateAdded);
      const tenDaysAgo = new Date();
      tenDaysAgo.setDate(tenDaysAgo.getDate() - 10);
      return dateAdded > tenDaysAgo;
    });
}

const lowStockList = function(inventory) {
  // Return the list of items with less than 10 in stock
  return inventory.filter((item) => item.quantityInStock < 10);
}


export { loadProducts, calculateDiversity, stockLevel, recentAdded, lowStock, recentAddedList, lowStockList }