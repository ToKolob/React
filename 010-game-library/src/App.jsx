import  { useState } from 'react'

export default function App() {
  const [games, setGames] = useState([])
  const [title, setTitle] = useState('')
  const [cover, setCover] = useState('')
  
  const addGame = ({title, cover}) => {
    const id = Math.floor(Math.random() * 1000000)
    const game = {id, title, cover}
    setGames(games =>{
      
      const newState = [...games, game]
      localStorage.setItem('obc-game-lib', JSON.stringify(newState))
      return newState
    })
  }

  function handleSubmit(e) {
  e.preventDefault()
  console.log(e.target)
  addGame({title,cover});
  setTitle('')
  setCover('')
  }


  function deleteGame(id) {
    const newState = games.filter(game => game.id !== id)    
    localStorage.setItem('obc-game-lib', JSON.stringify(newState))
  }






  return (
    <div className="App">
      <h1>Games Library</h1>
      <form action="">
        <div>
          <label htmlFor="title">Title:</label>
          <input 
            type="text" 
            id="tile"
            value={title}
            onChange={(ev) => setTitle(ev.target.value)}
          />   
        </div>
        <div>
          <label htmlFor="cover">Cover:</label>
          <input 
            type="text" 
            id="cover" 
            value={cover}
            onChange={(ev) => setCover(ev.target.value)}
          />
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <div className="games">
        {games.map(game => (
          <div className="game" key={game.id}>
            <img src={game.cover} alt={game.title} />
            <h2>{game.title}</h2>
            <button onClick={() => deleteGame(game.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  )

  
}

