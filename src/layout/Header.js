import React from 'react'
import { all_types_of_pokemons } from '../data/types_of_pokemons'

export default function Header({filter}) {
 return (
   <header className='header'>
    <h1 className='main-title'>POKEDEX</h1>
    <label className='filter-view'><span>Sort by:</span>
      <select className='select-type' onChange={filter} >
        <option value='all'>all</option>
        {all_types_of_pokemons.map((option,idx)=>(
          <option key={idx} value={option.type}>{option.type}</option>
        ))}
      </select>
    </label>
   </header>
 )
}
