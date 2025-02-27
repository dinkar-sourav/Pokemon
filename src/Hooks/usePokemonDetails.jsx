import { useState,useEffect } from "react";
import axios from "axios";
import downloadPokemon from "../Utils/downloadPokemons";
function usePokemonDetails(id){
    const [pokemon,setPokemon]=useState(null);

    const [pokemonListState,setPokemonListState]=useState({
        pokemonList:[],
        POKEDEX_url:'',
        nextUrl:'',
        prevUrl:''
    });
    const url="https://pokeapi.co/api/v2/pokemon/"
    async function downloadThisPokemon(id){
        const response=await axios.get(url+id);
        const pokemon=response.data;
        setPokemon({
            name:pokemon.name,
            height:pokemon.height,
            weight:pokemon.weight,
            types:pokemon.types,
            image:pokemon.sprites.other.dream_world.front_default
        })
        const types= response.data.types.map(t=>t.type.name);
        return types[0];
    }

    async function downloadTypes(id){
        const type=await downloadThisPokemon(id);
        await downloadPokemon(pokemonListState,setPokemonListState,`https://pokeapi.co/api/v2/type/${type}`);
    }

    useEffect(()=>{
       downloadTypes(id);
       window.scrollTo({top:0, left:0,behavior:'smooth'});
    },[id]);

    return [pokemon,pokemonListState];
}
export default usePokemonDetails;