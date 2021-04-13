import React from 'react';
import ReactDOM from 'react-dom';
import Rutas from './Rutas';
import './css/styles.scss';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <Router>
        <Rutas />
    </Router>    
    , document.getElementById('root'));


