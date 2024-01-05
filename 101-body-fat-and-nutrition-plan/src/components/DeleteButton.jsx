import PropTypes from "prop-types"
import useStock from "../hooks/useStock"
import { useNavigate } from "react-router-dom"
export default function DeleteButton( { itemName, itemId } ) {

  const { deleteItem } = useStock()
  const navigate = useNavigate()

  DeleteButton.propTypes = {
    itemId: PropTypes.number,
    itemName: PropTypes.string
  }

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete this item? ${itemName}`)) {
      deleteItem(itemId)
      navigate("/historic")
    }
  }
  return (
    <button
      className="delete-button"
      onClick={handleDelete}
    >
      Delete
    </button>
  )
}