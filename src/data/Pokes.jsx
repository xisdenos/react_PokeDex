import { useEffect, useState } from "react";
import FlashCard from '../components/FlashCard'

export default function GetPokes(){

    const [allPokemons, setAllPokemons] = useState([]);
    const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');

    useEffect(()=>{
        getAllPokemons()
    },[]);


    const getAllPokemons = async () =>{
        const res = await fetch(loadMore);
        const data = await res.json();
        
        setLoadMore(data.next)
        
        function createPokemonObeject(result){
            result.forEach( async (pokemon)=>{
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                const pokeData = await res.json()
                setAllPokemons(currentallPokemons => [...currentallPokemons, pokeData])

            })
        }
        createPokemonObeject(data.results)
        await console.log(allPokemons)
        
    }
    
    return(<div className="flex flex-row flex-wrap">
        {allPokemons.map(pokes => <FlashCard title= {pokes.name} description={<img src={pokes.sprites.front_default}></img>}/>)}
        <button className="w-10" onClick={() => getAllPokemons()}>Carregar</button>
    </div>)
}







