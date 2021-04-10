import React, { useEffect, useState } from 'react';

export default function Pokemons({ url }) {

    const [ isEditing, setIsEditing ] = useState(false);
    const [ pokemon, setPokemon ] = useState([]);
    useEffect(() => {
      getData()
    },[])
  
    const getData = () => {
      fetch(url)
        .then(response => response.ok && response.json())
        .then(data => {
          setPokemon(data)
        })
    }
    
    return (
      <div className="App-Card">
        <div className="Card-Image">
          <div>
            <img src={ pokemon.sprites ?  pokemon.sprites.front_default : ''}/>
          </div>
        </div>
        <div>
            <h3>No.{ pokemon.id}</h3>
            <h3>{ pokemon.name ? pokemon.name.replace(/^\w/, (c) => c.toUpperCase()) : ''}</h3>
        </div>
        {
            isEditing ? 
                <div className="Card-Info">
                    <div className="Card-Info-Data">
                        <div>
                            <span>Estadísticas</span>
                                <ul>
                                    {
                                        pokemon.stats ? pokemon.stats.map(stat => (
                                            <li>{ stat.base_stat }</li>
                                        ))
                                        :
                                        <li>No hay registros</li>
                                    }
                                </ul>
                        </div>
                        <div>
                            <span>Habilidades</span>
                                <ul>
                                    {
                                        pokemon.stats ? pokemon.abilities.map(ab => (
                                            <li>{ ab.ability.name }</li>
                                        ))
                                        : 
                                        ''
                                    }
                                </ul>
                        </div>
                        <div>
                            <span>Tipo</span>
                                <ul>
                                    {
                                        pokemon.types ? pokemon.types.map(tp => (
                                            <li>{tp.type.name}</li>
                                        ))
                                        :
                                        <li>Sin Tipo</li>
                                    }
                                </ul>
                        </div>
                        <div style={{ 'display': 'flex', 'flex-direction': 'column' }}>
                            <button
                                onClick={ () => setIsEditing(false) }
                            >Close</button>
                        </div>
                    </div>
                </div>
            :
                <div className="Card-Button">
                    <button
                        onClick={ () => setIsEditing(true) }
                    >Ver</button>
                </div>
        }
      </div>
    )
  }