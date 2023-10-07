import { useState } from 'react';
import { Input } from './components/Input';

export default function App(){

  const [password, setPassword] = useState('')
  const [copy, setCopy] = useState("Copy")
  const [passwordSize, setPasswordSize] = useState(10)
  const [showInput, setShowInput] = useState(false)

  const defaultSizePassword = showInput ? passwordSize: 8

  function generate (){
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789,./,!?@#$%^&*()';
    const length = defaultSizePassword;
    let newPassword = '';
    for (let i = 0; i < length; i++) {
      const position = Math.floor(Math.random() * characters.length);
      newPassword += characters[position];      
    }
    setCopy("Copy")
    setPassword(newPassword);

  }

  function copyPassword(){
    navigator.clipboard.writeText(password);
    setCopy("Copied")
  }

 

  return(
    <div className={"app"}>
      <h1>Generate Password</h1>
      <div>
        <label htmlFor="showInput">Customizar</label>
        
        <input type="checkbox" name="showInput" id="showInput" onChange={() => setShowInput(currentState => !currentState)} />
      </div>
      {showInput? (<Input passwordSize={passwordSize} setPasswordSize={setPasswordSize}/>): null}
      
      
      <button onClick={generate}>Generate {defaultSizePassword} chars password</button>
      <button onClick={copyPassword}>{copy}</button>
      <div>{password}</div>
      
    </div>
  )



} 

