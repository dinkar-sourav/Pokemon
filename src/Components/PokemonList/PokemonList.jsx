import './PokemonList.css'
import Pokemon from '../Pokemon/Pokemon';
import usePokemonList from '../../Hooks/usePokemonList';
function PokemonList(){
   const [pokemonListState,setPokemonListState]=usePokemonList();
 
   return (
        <div className='pokemon-list-main'>
            <div id="header">Pokemon List</div>
            <div className='page'>
               <button onClick={()=>setPokemonListState({...pokemonListState,POKEDEX_url:pokemonListState.prevUrl})}>Prev</button>
               <button onClick={()=>setPokemonListState({...pokemonListState,POKEDEX_url:pokemonListState.nextUrl})}>Next</button>
            </div>
             <div className='pokemon-list'>
                {pokemonListState.pokemonList.map((pokemon)=>{
                return <Pokemon id={pokemon.id} name={pokemon.name} key={pokemon.id} imgUrl={pokemon.image}/>
            })}
             </div>

        </div>
   )
}
export default PokemonList;