import './App.css';
import UserInfo from './componentes/UserInfo';
import UserContext from './contexts/UserContext';

export default function App(){
  //variable
  const user = {
    name: "John",
    age: 30,
    email: "qoDxG@example.com"
  }



  //function

  

  return(
    <UserContext.Provider value={user}>
      <div className="App">
        <div className="header">
          <h1>Use Context</h1>
        </div>
        <div className="main">

          <UserInfo/>

        </div>
      </div>
    </UserContext.Provider>
  )
}