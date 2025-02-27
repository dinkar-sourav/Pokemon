import { useState,useEffect } from "react";
import axios from "axios";
function usePokemonDetails(id){
    const [pokemon,setPokemon]=useState(null);
    const url="https://pokeapi.co/api/v2/pokemon/"
    async function downloadPokemon(id){
        const response=await axios.get(url+id);
        const pokemon=response.data;
        setPokemon({
            name:pokemon.name,
            height:pokemon.height,
            weight:pokemon.weight,
            types:pokemon.types,
            image:pokemon.sprites.other.dream_world.front_default
        })
    }


    useEffect(()=>{
       downloadPokemon(id);
    },[]);

    return [pokemon];
}
export default usePokemonDetails;