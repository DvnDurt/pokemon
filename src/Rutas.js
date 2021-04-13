import React from 'react';
import App from './App';
import AllPokemons from './components/AllPokemons';
import {
    Switch,
    Route,
} from 'react-router-dom';


export default function Rutas() {
    
    return(
        
        <Switch>
            <Route path="/all">
                <AllPokemons />
            </Route>
            <Route path="/">
                <App />
            </Route>
        </Switch>
        
    )
}