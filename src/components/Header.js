import React,{ useState } from 'react';
import logo from '../assets/pokeball.png';

export default function Header() {
  const [state, setState] = useState('');

  const handleClick = (e) => {
    console.log(e.target)
  }
  
  const handleChange = (e) => {
    setState(e.target.value);
  }
  return(
    <div className="App-Header">
        <div className="App-Header-Image">
          <img src={logo} />
        </div>
        <div className='App-Header-Form'>
          <input 
            placeholder="Buscar Pokemon"
            onChange={handleChange}
            value={state}
          />
          <button
            onClick={ handleClick }
          >Buscar</button>
        </div>
    </div>
  )
}