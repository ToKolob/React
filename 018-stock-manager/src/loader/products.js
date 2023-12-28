function loadProducts() {
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



export { loadProducts, calculateDiversity }