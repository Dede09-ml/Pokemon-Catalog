import pokemonJSON from "../../data/pokemon.json"
import "./PokemonList.css"
import { useState } from "react"
import PokemonItem from "../../components/PokemonItem/PokemonItem"

function PokemonList(){
    const [pokemons] = useState(pokemonJSON)
    const [filterPokemons, setFilterPokemons] = useState(pokemonJSON)

    const handleSearch = (e) => {
        let search = pokemons.filter((item) => {
            return item.name.toLowerCase().includes(e.target.value)
        })

        setFilterPokemons(search);
    }



    return (
        <div>
            <input type="text" placeholder="search pokemon..." className="search" onChange={handleSearch}/>
            <div className="list-pokemon">
                {filterPokemons.length==0 ? (
                    <div>data tidak ditemukan</div>
                ) : (
                    filterPokemons.map((item) => (
                        // <h1>{item.name}</h1>
                        <PokemonItem key={item.id} pokemon={item}/>
                    ))
                )}
            </div>
        </div>
    )

}

export default PokemonList