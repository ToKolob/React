import { useState, useEffect } from 'react'

async function fetchPokemon() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon')
    const data = await response.json()
    return data.results
  }

export default function App() {
  const [pokemon, setPokemon] = useState([])
  const [showPokemon, setShowPokemon] = useState(false)

  useEffect(() => {
    fetchPokemon().then(results => {
      setPokemon(results)
      console.log(results)
      return (console.log("encerrando estado"))
    })
  }, [])

  const showDetails = async (url) => {
    const data = await fetch(url).then(response => response.json())
    console.log(data);
    setShowPokemon(data)
  }




  return (
    <div className='App'>
      
      <div className='pokemon'>
      <h1>Pokemon</h1>
        <ul>
          {pokemon.map((pokemon) => (
            <li key={pokemon.name}>
              <button onClick={ () => showDetails(pokemon.url)}>Details</button>
              {pokemon.name}
            </li>


          ))}
        </ul>
      </div>
      <div className='details'>
        {showPokemon && (
          <div>
            <h2>{showPokemon.name}</h2>
            <img
              src={showPokemon.sprites.front_default}
              alt={showPokemon.name}
            />
            <div className='stats'>
              
              <ul>
              <h3>Stats</h3>
                {showPokemon.stats.map((stat) => (
                  <li key={stat.stat.name}>
                    {stat.stat.name}: {stat.base_stat}              
                  </li>
                ))}
              </ul>
              <ul>
                <h3>Types</h3>
                {showPokemon.types.map((type) => (
                  <li key={type.type.name}>
                    {type.type.name}
                  </li>
                ))}
              </ul>
              <ul>
                <h3>Abilities</h3>
                {showPokemon.abilities.map((ability) => (
                  <li key={ability.ability.name}>
                    {ability.ability.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

    </div>
  )
}