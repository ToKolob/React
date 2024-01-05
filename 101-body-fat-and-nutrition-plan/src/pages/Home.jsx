import useStock from "../hooks/useStock"
import { Link } from "react-router-dom"

export default function Home() {
  const { items} = useStock()

  const diversity = items.length 
  const inventoryTotal = items.reduce((sum, item) => sum + +item.quantity, 0)

  const limiteDate  = new Date()
  limiteDate.setDate(limiteDate.getDate() - 10)

  const last10Days = items.filter(item => item.createdAt > limiteDate)

  const lowQuantity = items.filter(item => item.quantity < 10)


  return (
    <main>
      <h1>Dashboard</h1>
      <div className="row">
        <div className="dashboard-card">
          Diversidade de itens
          <span>{diversity}</span>
        </div>
        <div className="dashboard-card">
          Inventário total
          <span>{inventoryTotal}</span>
        </div>
        <div className="dashboard-card">
          Itens recentes
          <span>{last10Days.length}</span>
        </div>
        <div className="dashboard-card">
          Itens acabando
          <span>{lowQuantity.length}</span>
        </div>
      </div>
      <div className="row">
        <div className="recent">
          <table>
            <thead>
              <tr><th>Itens Recentes</th>
              <th>Ações</th>
            </tr>
            </thead>
            <tbody>
              {last10Days.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td><Link to={`/items/${item.id}`} className="button is-small">Ver</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="low">
          <table>
            <thead>
              <tr>
                <th>Itens acabando</th>
                <th>Qtd.</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {lowQuantity.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td><Link to={`/items/${item.id}`} className="button is-small">Ver</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}