import React, { FunctionComponent, useState, useEffect } from 'react';
import { POKEMONS } from './models/mock.pokemon';
import { Pokemon } from './models/pokemon';
import PokemonList from './pages/pokemon-list';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PokemonsDetail from './pages/pokemon-detail';
import { PageNotFound } from './pages/page-not-found';
import { PokemonEdit } from './pages/pokemon-edit';
import { PokemonAdd } from './pages/pokemon-add';
import Login from './pages/login';
import { PrivateRoute } from './PrivateRoute';


/*
const App: FunctionComponent = () => {
    // const name: String = 'React JS';
    // const [name, setName] = useState<String>('React 1.7');
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    useEffect(() => {
        setPokemons(POKEMONS)
    }, []);

    const showAlert = () => {
        alert('Hello')
    }
    return (
        <div>
            <h1>Pokedex</h1>
            <p>Il y a {pokemons.length} dans le pokedex :</p>
            <div>
                {pokemons.map((pokemon ) => (
                    <p key={pokemon.name}>{pokemon.name}</p>
                ))}
            </div>
        </div>
    )
}*/

const App: FunctionComponent = () => {
    return (
        <Router>
            <div>
                {/* La barre de navigation commun à toutesles pages */}
                <nav>
                    <div className='nav-wrapper teal'>
                        <Link to="/" className="brand-logo center">Pokédex</Link>
                    </div>
                </nav>
                {/* Le système de gestion des routes de notre application */}
                <Switch>
                    <PrivateRoute exact path="/" component={PokemonList} />
                    <Route exact path="/login" component={Login} />
                    <PrivateRoute exact path="/pokemons" component={PokemonList} />
                    <PrivateRoute exact path="/pokemons/:id" component={PokemonsDetail} />
                    <PrivateRoute exact path="/pokemons/edit/:id" component={PokemonEdit} />
                    <PrivateRoute exact path="/pokemon/add" component={PokemonAdd} />
                    <Route component={PageNotFound} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;