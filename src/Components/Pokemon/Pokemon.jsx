import './Pokemon.css'
import { Link } from 'react-router-dom';
function Pokemon({name,imgUrl,id}){
    return (
        <Link to={`pokemon/${id}`} className='wrapper'>
          <div className="pokemon">
            <div className='pokemon-name'>{name}</div>
            <img className='pokemon-img' src={imgUrl} alt="" />
          </div>
        </Link>
    )
}
export default Pokemon;