
import { useState } from 'react'
import Button from './Button'
import { Title } from './Title/Title'



export default function Profile({avatar, name, bio, email, phone, github, linkedin, twitter}) {
const [followText, setFollowText] = useState('Follow')
  function handleClick() {
    alert('você está seguindo!')    
    setFollowText("Following")
  }

  return (
    <div className="profile">
      <img src={avatar} alt={name} />
      <Title> 
        {name}
        <Button title={followText} onClick={handleClick}/>
      
      </Title>
      <hr />
      <p>{bio}</p>
      <hr />
      <p>{email}</p>
      <hr />
      <p>{phone}</p>
      <hr />

      <Button title="GitHub" url={github} />
      <Button title="LinkedIn" url={linkedin} />
      <Button title="Twitter" url={twitter} />

    </div>
)}

