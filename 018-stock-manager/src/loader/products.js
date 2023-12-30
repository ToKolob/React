import { inventoryItems } from "../../public/stock.json";

function loadProducts({params}) {

const product = inventoryItems.find((item) => item.id === params.id);

  if (!product) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  product.dateAdded = formatDate(product.dateAdded);
  product.dateModified = formatDate(product.dateModified);
  return product;
}

const onSubmit = function(ev) {
  ev.preventDefault();

  // Obtenha os dados do formulário
  const formData = new FormData(ev.target);

  // Converta os dados do formulário para um objeto
  const formDataObject = {};
  formData.forEach((value, key) => {
    //add id to the object using function generateRandomId
    formDataObject.id = generateRandomId();
    formDataObject[key] = value;
    //add date to the object
    formDataObject.dateAdded = new Date().toISOString();
    
  });

  // Adicione os novos dados ao array existente
  inventoryItems.push(formDataObject);

  // Atualize o conteúdo do stock.json com os dados atualizados
  const updatedStockData = { inventoryItems };

  //clear the form
  ev.target.reset();
  //focus on the first input
  document.getElementById("name").focus();

  // Use a Fetch API para enviar os dados atualizados para stock.json
  fetch('stock.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedStockData),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Data sent and stock.json updated successfully:', data);
  })
  .catch(error => {
    console.error('Error sending data:', error);
  });
};

const deleteProduct = function(id) {
  const index = inventoryItems.findIndex((item) => item.id === id);
  if (index !== -1) {
    const deletedItem = inventoryItems.splice(index, 1);
    console.log(`Deleted item: ${deletedItem}`);
  }  
  //Update the component
}

const formatDate = function(date) {
    //format the data "2023-12-27T12:00:00Z" into "2023/12/27 12:00:00"
    const formattedDate = new Date(date).toLocaleString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });

    return formattedDate;
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
  const totalQuantity = inventory.reduce((sum, item) => sum + +item.quantityInStock, 0);
  
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
    }).reduce((sum, item) => sum + +item.quantityInStock, 0);

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

function generateRandomId() {
  const idLength = 20;
  let id = '';

  for (let i = 0; i < idLength; i++) {
    const randomNumber = Math.floor(Math.random() * 10);
    id += randomNumber;
  }

  return id;
}

// Exemplo de uso
const randomId = generateRandomId();
console.log(randomId);



export { loadProducts, calculateDiversity, stockLevel, recentAdded, lowStock, recentAddedList, lowStockList, formatDate, onSubmit, deleteProduct };