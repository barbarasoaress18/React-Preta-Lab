import { useState , useEffect } from 'react'


function Busca () {
    const [pokemons , setPokemons ] = useState ([]) // guarda as informações que vem do usuario 
    const [ busca, setBusca ] = useState ('') // guarda valor digitado pelo usuario
    const [pokemonsFiltrados , setpokemonsFiltrados ] = useState ([]) // 


    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(Response => Response.json())
        .then(data => setPokemons (data.results))

    }, [])

    useEffect(() => {
        setpokemonsFiltrados(pokemons.filter(pokemon => {
            return pokemon.name.includes(busca)
        }))
    }, [busca, pokemons])

    function capturaBusca(e) {
        setBusca(e.target.value)    
    }

    return (
        <>
            <input onCharge = { capturaBusca }placeholder="digite um personagem"/>
                <div className="cards">
                    
                    {pokemons.map(pokemon => {
                        return (
                            <div key ={pokemon.name} className="card">
                                <h2> {pokemon.name}</h2>
                                <img src= {pokemon.url} />

                            </div>
                        )
                    })}



                </div>

            
         </>
          
    )
}

    export default Busca