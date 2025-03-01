import './Pokedex.css';
import PokemonList from '../PokemonList/PokemonList';
import Search from '../Search/Search';
import { useState } from 'react';
import PokemonDetails from '../PokemonDetails/PokemonDetails';
function Pokedex(){
    const [inputText,setInputText]=useState('');
    return (
        <div className='main-div'>
            <h1>POKEDEX</h1>
            <Search updateText={setInputText}/>
            {inputText ? <PokemonDetails pokemonName={inputText}/> : <PokemonList/>};
        </div>
        
    )
}

export default Pokedex;