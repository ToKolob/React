import { Status } from "./components/Status"
import { SubTitle } from "./components/SubTitle"
import { Title } from "./components/Title"
import style from "./App.module.css"
export default function App(){

  

  return(
    <div className={style.app}>
      <Title />
      <SubTitle />
      <Status />
    </div>
)}

