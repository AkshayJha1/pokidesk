import React from 'react'
import './Card.css'

export default function PokemonCard({ pokemonData }) {
  return (
    <div className='card'>
      <div className='image'>
        <img className='img' src={pokemonData.sprites.other.dream_world.front_default} alt='Loading'/>
      </div>
      <h2 style={{display:'flex',justifyContent:'center'}}>
      {pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}
      </h2>
      <div className='typeBox'>
        <span className='insidetypeBox'>
        {pokemonData.types.map((currElem)=>{
            return currElem.type.name 
          }).join(' , ')
        }
        </span>
      </div>
      <div className='stats'>
        <div className='stats1'>
        <div className='defence'>
          <b><span>{pokemonData.stats[2].stat.name}</span><br /></b>
            <span className='num'>{pokemonData.stats[2].base_stat}</span>
          </div>
          <div className='hp ' style={{}}>
          <b><span>{pokemonData.stats[0].stat.name}</span><br /></b>
            <span className='num'>{pokemonData.stats[0].base_stat}</span>
          </div>
          <div className='attack'>
          <b><span>{pokemonData.stats[1].stat.name}</span><br /></b>
            <span className='num'>{pokemonData.stats[1].base_stat}</span>
          </div>
        </div>
        <div className='stats2'>
          <div className='weight'>
          <b><span>weight</span><br /></b>
            <span className='num'>{pokemonData.weight}</span>
          </div>
          <div className='speed'>
            <b><span>{pokemonData.stats[5].stat.name}</span><br /></b>
            <span className='num'>{pokemonData.stats[5].base_stat}</span>
          </div>
          <div className='height'>
          <b><span>height</span><br /></b>
            <span className='num'>{pokemonData.height}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
