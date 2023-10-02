import './App.css'
import Profile from './components/profile/Profile' 
import imgProfile from './images/avatar.webp'

function App() {
  return (
    <div >
      <Profile 
      avatar={imgProfile} 
      name="Lucas" 
      bio="Estudante de React" 
      email="1uPj6@example.com" 
      phone="123456789" 
      github="https://github.com" 
      linkedin="https://www.linkedin.com" twitter="https://twitter.com" />
    </div>
  )  

}

export default App
