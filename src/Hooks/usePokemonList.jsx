import { useState,useEffect } from "react";
import Pokemon from "../Components/Pokemon/Pokemon";
import downloadPokemon from "../Utils/downloadPokemons";
function usePokemonList(url){
   const [pokemonListState,setPokemonListState]=useState({
       pokemonList:[],
       POKEDEX_url:url,
       nextUrl:url,
       prevUrl:url
   });

   
   useEffect(()=>{
      downloadPokemon(pokemonListState,setPokemonListState);
   },[pokemonListState.POKEDEX_url])

   return [pokemonListState,setPokemonListState]

}
export default usePokemonList;