import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Paginator from './components/Paginator'
import Pokemons from './components/Pokemons';


function App() {

  const [state, setState] = useState({
    isLoading: true
  });

  const url = 'https://pokeapi.co/api/v2/pokemon/?offset=8&limit=8';

  useEffect(() => {
    getUrls(url);
      
  },[])
      
  const getUrls = (url) => {
    fetch(url)
      .then(response => {
        if(response.ok) return response.json()
        else throw new Error(response.statusText);
      })
      .then((data) => {
        setState({
          isLoading: false,
          previus: data.previous || null,
          next: data.next,
          results: data.results
        })
      })
      .catch(err => console.error(err))
  }

  const handlePaginator = (button) => {
    const url = state[button];

    if(url) {
      getUrls(url)
    }

  }
  
  return (
    <div>
      <Header />  
      <div className="App-Container">
        <Paginator handlePaginator={handlePaginator}/>
        <div className="App-Content">
          {
          !state.isLoading && state.results.map(result => <Pokemons { ...result } key={ result.name }/>)
          } 
        </div>       
      </div>
    </div>
  );
}

export default App;
