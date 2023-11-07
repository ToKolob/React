import { useRef, useState } from 'react'
import './App.css'
import RefExemple from './RefExemple'

function App() {
  let variables = 0 
  const ref = useRef(0)
  const [state, setState] = useState(0)


  const showValues = () => {
    alert(
      `
      Variáveis: ${variables}
      Ref: ${ref.current}
      State: ${state}
      `
    )
  }

  return (
    <div id="app">
      <h2>Exemplo de uso de useRef</h2>

      <RefExemple/>
      <hr />

      <h2>Persistindo valores com o useRef</h2>
      <hr />
      <p>Variável: {variables}</p>
      <p>Ref: {ref.current}</p>
      <p>UseState: {state}</p>
      <hr />
      <button onClick={()=> variables++}>Aumentar Variável</button>
      <button onClick={()=> ref.current++}>Aumentar UseRef</button>
      <button onClick={()=> setState(state => state + 1)}>Aumentar UseState</button>
      <hr />
      <button onClick={showValues}>Exibir Valores</button>



    </div>
  )

  }
export default App
