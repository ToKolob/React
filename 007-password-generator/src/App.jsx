
import './App.css'
import { useState } from 'react'

function App() {
  function copy (){
    navigator.clipboard.writeText(password)  
    setClassCopied('Copiado')
  }
  function generatePassword() {
    const allowedChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&*-_';
    let password = ''
    for (let i = 0; i < 16; i++) {
      const index = Math.floor(Math.random() * allowedChars.length)
      password += allowedChars[index]      
    }    
    setClassCopied('Copiar')
    return password
  }

  let [password, setPassword] = useState('') 
  const generate = () =>setPassword(generatePassword())

  const [classCopied, setClassCopied] = useState('Copiar')
  

  return (
    <div className="App">
      <h1>Gerador de senhas</h1>
      <button onClick={generate}>Gerar senha</button>
      <button className={classCopied} onClick={copy}>{classCopied}!</button>
      <p>{password}</p>
    </div>
  )
}

export default App
