import { useEffect } from 'react'
import { useState } from 'react'

function Counter() {
  const[count, setCount] = useState(0)
  useEffect(
    ()=>{
      console.log("chamando api");
      return ()=>{
        console.log("removendo api");
      }
    },[]
  )
return (  
  <>
        <h2>Count:</h2>
      <button onClick={()=>setCount(count + 1) }>{count}</button>
  </>
)
}

export default function App() {

  const[show, setShow] = useState(false)


  return (


    <>
    <div>
      <h1>useEffect</h1>
      <hr />
      <input type="checkbox" value={show} onChange={()=>setShow(state => !state)} id ="show"/>
      <label htmlFor="show">show</label>
      {
        show? <Counter /> : null
      }
      



    </div>
    
    </>
  )
}