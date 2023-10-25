import  Game  from './components/Game'
import  NewGameForm  from './components/NewGameForm'
import  useGameColection  from './hooks/useGameColection'

export default function App() {
  const { games, addGame, deleteGame } = useGameColection()

  return (
    <div className="App">
      <h1>Games Library</h1>

      <NewGameForm addGame={addGame} />

      <div className="games">
        {
          games.length > 0 ?
          games.map(game => (
            <Game 
              key={game.id}
              title={game.title}
              cover={game.cover}
              onRemove={() => deleteGame(game.id)}
            />


          ))
          :
          <h2>There are no games, insert games above.</h2>
        }
      </div>
    </div>
  )

  
}

