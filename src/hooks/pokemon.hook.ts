// Ceci est un hook personnalisé

import React, { useState, useEffect } from 'react';
import { Pokemon } from '../models/pokemon';
import { POKEMONS } from '../models/mock.pokemon';
import PokemonService from '../services/pokemon-service';

export const usePokemons = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        PokemonService.getPokemons()
            .then((pokemons) => {
                setPokemons(pokemons);
            }).catch((e: Error) => {
                alert(e.message);

            });

        //   setPokemons(POKEMONS);
    }, []);

    // On retourne l'état pokemon
    return pokemons;
}
