import React from 'react'
import { all_types_of_pokemons } from '../../data/types_of_pokemons';

export default function CardFront(props) {
  const { image, name, types} = props.pokemon;
  const bgColors = types.map( type => {
    return getBGColor(type);
  })
  function background() {
    return  'linear-gradient(' + (bgColors.length > 1 ? bgColors[0]+', ' + bgColors[1]+')' : bgColors[0]+', ' + bgColors[0]+')')
  }
  const lettersColor = types.map( type => {
    return getLetterColor(type);
  })
  function color(){
    return lettersColor.length > 1 ? lettersColor[1] : lettersColor[0]; 
  }

  return (
    <div className='front' style={{background: background()}} >
      <div className='img-pokemon'>
        <img src={image} alt={name} />
      </div>
      <h2 className="name-pokemon" style={{color: color()}}>{name}</h2>
    </div>
  )
}


function getBGColor(type){
  let arr = [...all_types_of_pokemons];
  for(let i = 0; i < arr.length; i++){
    if(arr[i].type===type){
      return arr[i].bg_color;
    }
  }
}
function getLetterColor(type){
  let arr = [...all_types_of_pokemons];
  for(let i = 0; i < arr.length; i++){
    if(arr[i].type===type){
      return arr[i].color;
    }
  } 
}