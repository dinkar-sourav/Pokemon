import useDebounce from '../../Hooks/useDebounce';
import './Search.css';

function Search({updateText}){
  const debounceSerach=useDebounce((e)=>updateText(e.target.value));
    return (
        <input 
        id='search-pokemon'
          type="text" 
          placeholder='which pokemon are you looking for?'
          onChange={debounceSerach}
        
        />
    )
}
export default Search;