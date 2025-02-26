import { useEffect } from 'react';
import './PokemonList.css'
import { useState } from 'react';
import axios from 'axios';
import Pokemon from '../Pokemon/Pokemon';
function PokemonList(){
   const url="https://pokeapi.co/api/v2/pokemon";
   const [pokemonList,setPokemonList]=useState([]);
   const [POKEDEX_url,setPOKEDEX_url]=useState("https://pokeapi.co/api/v2/pokemon");

   const [nextUrl,setNextUrl]=useState(url);
   const [prevUrl,setPrevUrl]=useState(url);
   async function downloadPokemon(){
      const response =await axios.get(POKEDEX_url);
      //array of pokemons(name and url of pokemon)
      const pokemonResults=response.data.results;
      setNextUrl(response.data.next);
      setPrevUrl(response.data.previous);
      //array of promises
      const pokemonPromise=pokemonResults.map((pokemon)=> axios.get(pokemon.url));
      //when all the promises fullfilled
      const pokemonListData=await axios.all(pokemonPromise);
      
      const pokemonFinalList=pokemonListData.map((pokemonData)=>{
         const pokemon=pokemonData.data;
         return {
             id:pokemon.id,
             name:pokemon.name,
             image:pokemon.sprites.other.dream_world.front_default,
             types:pokemon.types
         }
      })
      setPokemonList(pokemonFinalList);
      
   }
   useEffect(()=>{
      downloadPokemon();
   },[POKEDEX_url])

 
   return (
        <div className='pokemon-list-main'>
            <div id="header">Pokemon List</div>
            <div className='page'>
               <button onClick={()=>setPOKEDEX_url(prevUrl)}>Prev</button>
               <button onClick={()=>setPOKEDEX_url(nextUrl)}>Next</button>
            </div>
             <div className='pokemon-list'>
                {pokemonList.map((pokemon)=>{
                return <Pokemon id={pokemon.id} name={pokemon.name} key={pokemon.id} imgUrl={pokemon.image}/>
            })}
             </div>

        </div>
   )
}
export default PokemonList;