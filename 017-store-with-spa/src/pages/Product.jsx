import { Link, useLoaderData } from "react-router-dom";


export default function Product() {
  const product = useLoaderData();


  return (
    <section>
      <Link to="/products">
        <button>Voltar</button>
      </Link>
      <h1>{product.name}</h1>
      <p> {product.description}</p>
      <p>R$ {product.price}</p>
      <button>Adicionar ao carrinho</button>
    </section>
  )
}