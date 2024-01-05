import { Link } from "react-router-dom";
import useStock from "../hooks/useStock.jsx";
import DeleteButton from "./DeleteButton.jsx";

export default function ItemsTable() {
  const { items } = useStock();

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Em Estoque</th>
          <th>Categoria</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.quantity} unid.</td>
            <td>{item.category}</td>
            <td>
              <Link to={`/historic/${item.id}`} className="button is-primary is-small">
                Ver
              </Link>
              <Link to={`/historic/${item.id}/edit`} className="button is-small">
                Atualizar
              </Link>
              <DeleteButton itemName={item.name} itemId={item.id}/>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}