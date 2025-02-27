import './PokemonDetails.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import usePokemonDetails from '../../Hooks/usePokemonDetails';
function PokemonDetails(){
    // this id name should be same as we have defined in our routes
    const {id}=useParams();
   const [pokemon]=usePokemonDetails(id);
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