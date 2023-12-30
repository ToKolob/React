import { onSubmit } from "../loader/products"
export default function NewProduct() {

  return (
    <div id="newProduct">
      <form action="#" onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Product Name</label>
          <input type="text" name="name" id="name" />          
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <input type="text" name="category" id="category" />
        </div>
        <div>
          <label htmlFor="quantityInStock">Quantity in Stock</label>
          <input type="number" name="quantityInStock" id="quantityInStock"/>          
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input type="number" name="price" id="price" />          
        </div>
        <div>          
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <textarea name="description" id="description" cols="30" rows="10"></textarea>  
          <button type="submit">Submit</button>                
        </div>

      </form>

    </div>
  )
}