import React from 'react'
import CardBack from './CardBack';
import CardFront from './CardFront';

export default function PokCard(props) { 
  const { id, showDetails} = props.pokemon;

  return (
    <div onClick={props.viewInfo.bind(this,id)}  className={"card" + (showDetails? " card__side" : "")} >
      <CardFront pokemon={props.pokemon} />
      <CardBack pokemon={props.pokemon} />
    </div>
  )
}

