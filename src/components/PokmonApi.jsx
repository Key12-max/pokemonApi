
import React, {useEffect, useState} from 'react';

const PokmonApi = () => {
    const[pokemon, setPokemon]= useState([])

    useEffect(()=>{
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(response=>{
            return response.json()
        })
        .then(response=>{
            setPokemon(response.results)
        })
        .catch((error)=>{
            console.log(error);
        })
    }, [])
     // The empty array as the second parameter makes it so that useEffect 
  //    does NOT run more than once
    return (
        <div>
            <ul>
                {
                    pokemon.map((pokemonObj, index)=>{
                        return(<li key={index}>{pokemonObj.name}</li>)
                    })
                }
            </ul>
        </div>
    );
}

export default PokmonApi;
