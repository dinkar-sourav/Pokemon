import { useEffect, useState } from 'react';
import './PokemonDetails.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
function PokemonDetails(){
    // this id name should be same as we have defined in our routes
    const {id}=useParams();
    const [pokemon,setPokemon]=useState(null);
    const url="https://pokeapi.co/api/v2/pokemon/"
    async function downloadPokemon(){
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
       downloadPokemon();
    },[]);
    return (
        <>
        <h1 className='link'>
            <Link to='/'>
            POKEDEX
            </Link>
        </h1>
        {pokemon &&
        <div className='outer-div'>
            <div className='name'>{pokemon.name}</div>
            <div className='image'>
                <img src={pokemon.image} alt="" />
            </div>
            <div className='ht-wt'>
               <div>height:{pokemon.height}</div> 
               <div>weight:{pokemon.weight}</div>
            </div>
            <div className='types'>
                <b>Type:</b> {pokemon.types.map(t=> <span className='span' key={t.type.name}>{t.type.name}</span>)}
            </div>
        </div>}
        </>
    )
}
export default PokemonDetails;