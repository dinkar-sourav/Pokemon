import { useState,useEffect } from "react";
import axios from "axios";
import Pokemon from "../Components/Pokemon/Pokemon";
function usePokemonList(){
    const url="https://pokeapi.co/api/v2/pokemon";
   // const [pokemonList,setPokemonList]=useState([]);
   // const [POKEDEX_url,setPOKEDEX_url]=useState("https://pokeapi.co/api/v2/pokemon");

   // const [nextUrl,setNextUrl]=useState(url);
   // const [prevUrl,setPrevUrl]=useState(url);
   const [pokemonListState,setPokemonListState]=useState({
       pokemonList:[],
       POKEDEX_url:url,
       nextUrl:url,
       prevUrl:url
   });

   async function downloadPokemon(){
      const response =await axios.get(pokemonListState.POKEDEX_url);
      //array of pokemons(name and url of pokemon)
      const pokemonResults=response.data.results;
      // setNextUrl(response.data.next);
      // setPrevUrl(response.data.previous);

      setPokemonListState((state)=>({...state,nextUrl:response.data.next,prevUrl:response.data.previous}))
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
      // setPokemonList(pokemonFinalList);
      setPokemonListState((state)=>({...state,pokemonList:pokemonFinalList}));
      
   }
   useEffect(()=>{
      downloadPokemon();
   },[pokemonListState.POKEDEX_url])

   return [pokemonListState,setPokemonListState]

}
export default usePokemonList;