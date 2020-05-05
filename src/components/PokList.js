import React from 'react'
import PokCard from './Card/PokCard';


 function PokList(props){
   console.log(props)
 const pokemon_list = props.pokemons.map((pok,index)=> (
  <PokCard 
          key={index} 
          pokemon={pok} 
          viewInfo={props.viewInfo}
          />
 ));
 return (
  <div className='pokemon_list'>
    {pokemon_list}
  </div>
 )
}

export default PokList;
