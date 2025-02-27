import axios from "axios";
async function downloadPokemon(pokemonListState,setPokemonListState,typeUrl=""){
    const response =await axios.get(pokemonListState.POKEDEX_url ? pokemonListState.POKEDEX_url : typeUrl);
    //array of pokemons(name and url of pokemon)
    let pokemonResults=response.data.results ? response.data.results : response.data.pokemon;
    pokemonResults=pokemonResults.slice(0,20);
    setPokemonListState((state)=>({...state,nextUrl:response.data.next,prevUrl:response.data.previous}))
    //array of promises
    const pokemonPromise=pokemonResults.map((p)=> {
        if(p.url){
            return  axios.get(p.url);
        }
        else if(p.pokemon.url){
            return axios.get(p.pokemon.url)
        }
       
    })
    //when all the promises fullfilled
    const pokemonListData=await axios.all(pokemonPromise);
    
    const pokemonFinalList=pokemonListData.map((pokemonData)=>{
       const pokemon=pokemonData.data;
       return {
           id:pokemon.id,
           name:pokemon.name,
           image:pokemon.sprites.other.dream_world.front_default,
           types:pokemon.types
       }
    })
    // setPokemonList(pokemonFinalList);
    setPokemonListState((state)=>({...state,pokemonList:pokemonFinalList}));
    
 }

 export default downloadPokemon;