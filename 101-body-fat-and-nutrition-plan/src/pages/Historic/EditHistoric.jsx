import HistoricForm from "../../components/HistoricForm"
import { useParams } from "react-router-dom"
import  useStock  from "../../hooks/useStock"
export default function EditHistoric() {

  const { getItem } = useStock()
  const { id } = useParams()

  const item = getItem(id)
  return (
    <div>
      <p>Editing Historic {item.name}</p>
      <HistoricForm itemToUpdate={item}/> 
    </div>
  )
}