import  { useState } from 'react'

export default function useGameColection() {
  const [games, setGames] = useState(() => {
    const storageGame = localStorage.getItem('obc-game-lib')
    return storageGame ? JSON.parse(storageGame) : []
  })
  const addGame = ({title, cover}) => {
    const id = Math.floor(Math.random() * 1000000)
    const game = {id, title, cover}
    setGames(games =>{
      
      const newState = [...games, game]
      localStorage.setItem('obc-game-lib', JSON.stringify(newState))
      return newState
    })
  }
  function deleteGame(id) {
    const newState = games.filter(game => game.id !== id)    
    localStorage.setItem('obc-game-lib', JSON.stringify(newState))
    setGames(newState)
  }
  return {
    games,
    addGame,
    deleteGame
  }
 }
