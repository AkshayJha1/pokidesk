import React, { useState, useEffect } from 'react'
import PokemonCard from './PokemonCard';


export default function Card() {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 
    const [search, setSearch] = useState('');
     
    const API = "https://pokeapi.co/api/v2/pokemon?limit=100";
    const fetchPokemon = async() =>{
        try{
            const res = await fetch(API);
            const data = await res.json();
            // // console.log(data);

            const detailedPokemonData = data.results.map( async(currPokemon) => {
                const res = await fetch(currPokemon.url);
                const data = res.json();
                // console.log(data);
                return data;
            })
            const detailedPokemonResponse = await Promise.all(detailedPokemonData); // promis.all() is a method in which if the all the promises passed in it is fulfilled then it will return otherwise no promise will be returned.
            setPokemon(detailedPokemonResponse);
            setLoading(false);
        }catch(err){
            console.log(err);
            setLoading(false);
            setError(err);
        }
        
    }
    useEffect(()=>{
        fetchPokemon();
    },[])
    //search functionality
    const searchData = pokemon.filter((currPokemon) => currPokemon.name.toLowerCase().includes(search.toLowerCase() )) //filter is used to filter the data from total data.
    
    if (loading)
        return (
          <div className="loading-container">
            <div className="spinner"></div>
            <p className="loading-text">Loading...</p>
          </div>
    );
    if(error) return <div>{error.message}</div>
  return (
    <section className='container'>
        <header style={{display:'flex' ,justifyContent:'center'}}>
            <h1> Lets Catch Pokemon</h1>
        </header>
        <div className='search-container' style={{display:'flex' ,justifyContent:'center', position:'relative', left:'50%',transform:'translateX(-50%)'}}>
            <input type="text" className='search-input' placeholder='search Pokemon' id='searchBar' value={search} onChange={(e)=>setSearch(e.target.value)}/>
        </div>
        <div>
            <ul className='cards'style={{display: 'flex',flexWrap:'wrap', gap:'50px'}}>
                {searchData.map((currPokemon)=>{
                    return <PokemonCard key={currPokemon.id} pokemonData = {currPokemon} />
                })}
            </ul>
        </div>
    </section>
  )
}
