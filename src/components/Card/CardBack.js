import React from 'react'

export default function CardBack(props) {
  const { pokemon } = props;
  const pokeNumber = pokemon.id >= 100 ? '#'+ pokemon.id : pokemon.id >=10 ? '#0' + pokemon.id : '#00' + pokemon.id; 
  return (
    <div className="back">
      <h2>{pokemon.name} - {pokeNumber}</h2>
      <table>
        <tbody>
          <tr>
            <td>type</td>
            <td>{pokemon.types.join(', ')}</td>
          </tr>
          {pokemon.stats.map((stat,idx)=>(
            <tr key={idx}>
            <td>{stat.name}</td>
            <td>{stat.points}</td>
            </tr>
          ))}
          <tr>
            <td>weight</td>
            <td>{pokemon.weight}</td>
          </tr>
          <tr>
            <td>Total movies</td>
            <td>{pokemon.total_movies}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
