import { useContext } from "react"
import UserContext from "../contexts/UserContext"

export default function UserInfo(){

  const user = useContext(UserContext)

  return (
    <div>
      <h1>User Info</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  )
}