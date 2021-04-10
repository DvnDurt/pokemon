import React from 'react';

export default function Paginator({ handlePaginator }) {
    const handleClick = (e) => {
        handlePaginator(e.target.name)
    }

    return(
        <div className="App-Paginator">
          <button
            // disabled
            name='previus'
            onClick={ handleClick }
          > Anterior</button>
          <button
            name='next'
            onClick={ handleClick }
          >Siguiente</button>
        </div>
    )
}