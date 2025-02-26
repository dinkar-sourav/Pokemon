import './Pokedex.css';
import PokemonList from '../PokemonList/PokemonList';
import Search from '../Search/Search';
function Pokedex(){
    return (
        <div className='main-div'>
            <h1>POKEDEX</h1>
            <Search/>
            <PokemonList/>
        </div>
        
    )
}

export default Pokedex;