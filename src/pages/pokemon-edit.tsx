import React, { FunctionComponent, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import PokemonForm from '../components/pokemon-form';
import { Pokemon } from '../models/pokemon';
import { POKEMONS } from '../models/mock.pokemon';
import PokemonService from '../services/pokemon-service';
import { Loader } from '../components/loader';

type Params = { id: string };

export const PokemonEdit: FunctionComponent<RouteComponentProps<Params>> = ({ match }) => {

    const [pokemon, setPokemon] = useState<Pokemon | null>(null);

    useEffect(() => {
        // POKEMONS.forEach(pokemon => {
        //     if (match.params.id === pokemon.id.toString()) {
        //         setPokemon(pokemon);
        //     }
        // })
        PokemonService.getPokemon(+match.params.id)
        .then(pokemon => setPokemon(pokemon)
        ).catch((e: Error) => {
            alert(e.message);
        });
        
    }, [match.params.id]);

    return (
        <div>
            {pokemon ? (
                <div className="row">
                    <h2 className="header center">Éditer {pokemon.name}</h2>
                    <PokemonForm pokemon={pokemon} isEditForm={true}></PokemonForm>
                </div>
            ) : (
                <div className='center'>
                <Loader />
            </div>
            )}
        </div>
    );
}