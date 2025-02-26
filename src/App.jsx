import { Routes,Route} from "react-router-dom";
import Pokedex from "./Components/Pokedex/Pokedex";
import PokemonDetails from "./Components/PokemonDetails/PokemonDetails";
function App(){
   return (
      <>
        <Routes>
            <Route path="/" element={<Pokedex/>}/>
            <Route path="/pokemon/:id" element={<PokemonDetails/>}/>
            <Route path="*" element={<h1>Not Found</h1>}/>
        </Routes>
      </>
   )
}
export default App;