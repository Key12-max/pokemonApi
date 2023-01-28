
import React, {useEffect, useState} from 'react';
import axios from "axios";

const AxiosPokmonApi = () => {

    const[pokemon, setPokemon]= useState([])
    useEffect(()=>{
        axios
        .get('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then((response)=>{
        console.log(response.data.results);
        setPokemon(response.data.results);
        })
        .catch((error)=>{
            console.log(error);
        })
    }, [])
    return (
        
        <div>
                {<h1>Axios Pokemon API</h1>}
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

export default AxiosPokmonApi;
