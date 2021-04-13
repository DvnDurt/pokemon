import React, { useState, useEffect } from 'react';
import Header from './Header';
import Pokemons from '../controllers/pokemons';
// import Pruebas from './Pruebas';

export default function AllPokemons() {

    const [ state, setState ] = useState({
        isComplete: false,
        data: []
    });
    const pokemons = new Pokemons();

    useEffect(() => {
        pokemons.getEachPokemon()
            .then( ( { results } )  => getSpritesImage(results))
    },[])
    
    function getSpritesImage(results) {
        
        const arr = [];
        results.forEach( pokemon => {
            fetch(pokemon.url)
                .then( response => {
                    if(response.ok) {
                        return response.json()
                    }
                })
                .then(( { sprites } ) => {
                    arr.push(sprites)
                })
                .catch(err => console.log('Error Mijo', err))
        })
        setTimeout(() => {
            setState({
                isComplete: true,
                data: arr
            });
        }, 5000)
    }

    return(
        <>
            <Header />
            <div className="App-Cool-Collage">
                {
                    state.isComplete && state.data.map((s) => (
                        <div key={s.front_default}>
                            <img src={ s.front_default ? s.front_default : '' }/>
                        </div>
                    ))
                }
            </div>
        </>
    )
}