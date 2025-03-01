import './PokemonDetails.css';
import { Link } from 'react-router-dom';
import usePokemonDetails from '../../Hooks/usePokemonDetails';
import Pokemon from '../Pokemon/Pokemon';
function PokemonDetails({pokemonName}){
    // this id name should be same as we have defined in our routes
   const [pokemon,pokemonListState]=usePokemonDetails(pokemonName);
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

        <div className='similar-pokemons'>
            <h2>Similar Pokemons</h2>
            <div className='similar-list'>
                {pokemonListState.pokemonList.length>0 &&  
                    pokemonListState.pokemonList.map((pokemon)=>{
                        return <Pokemon id={pokemon.id} name={pokemon.name} key={pokemon.id} imgUrl={pokemon.image}/>
                    })
                    
                }
            </div>
        </div>
        </>
    )
}
export default PokemonDetails;