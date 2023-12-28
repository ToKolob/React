import products from '../../public/database.json';

export default function loadProducts({ params }){
  const product = products.find((product) => product.id === +params.productId);

  if(!product){
    throw new Response('404', { status: 404 }); 
    }

  return product
}