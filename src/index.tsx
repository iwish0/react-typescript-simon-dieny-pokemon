import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// React va injecter notre composant App dans l'élément HTML portant l'id root
ReactDOM.render(
    <App />,
    document.getElementById('root')
)