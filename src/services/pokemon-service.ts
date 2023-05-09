import { Pokemon } from "../models/pokemon";
import POKEMONS, { } from '../models/mock.pokemon';

export default class PokemonService {

    public static pokemons: Pokemon[] = POKEMONS;
    // Exemple pour bouchonner en dev. On considére ici qu'on appelle l'api si on est en dev, et que l'on retourne le mock si on est en prod (c juste pour l'exemple)
    public static isDev: boolean = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development');

    static getPokemons(): Promise<Pokemon[]> {
        if (this.isDev) {
            return fetch('http://localhost:3001/pokemons')
                .then(response => response.json())
                .catch(this.handleError)
        }
        return new Promise(resolve => {
            resolve(this.pokemons);
        });
    }

    static getPokemon(id: number): Promise<Pokemon | null> {
        return fetch(`http://localhost:3001/pokemons/${id}`)
            .then(response => response.json())
            .then(data => this.isEmpty(data) ? null : data)
            .catch(this.handleError)
    }

    static addPokemon(pokemon: Pokemon): Promise<Pokemon> {
        return fetch(
            `http://localhost:3001/pokemons`,
            {
                method: 'POST',
                body: JSON.stringify(pokemon),
                headers: { 'Content-Type': 'application/json' }
            }
        )
            .then(response => response.json())
            .catch(this.handleError)
    }

    static updatePokemon(pokemon: Pokemon): Promise<Pokemon> {
        return fetch(
            `http://localhost:3001/pokemons/${pokemon.id}`,
            {
                method: 'PUT',
                body: JSON.stringify(pokemon),
                headers: { 'Content-Type': 'application/json' }
            }
        )
            .then(response => response.json())
            .catch(this.handleError)
    }

    static deletePokemon(pokemon: Pokemon): Promise<Pokemon> {
        return fetch(
            `http://localhost:3001/pokemons/${pokemon.id}`,
            { method: 'DELETE' }
        )
            .then(response => response.json())
            .catch(this.handleError)
    }

    static searchPokemon(term: string): Promise<Pokemon[]> {
        return fetch(`http://localhost:3001/pokemons?q=${term}`)
            .then(response => response.json())
            .catch(this.handleError)
    }

    static isEmpty(data: Object): boolean {
        return Object.keys(data).length === 0;
    }

    static handleError(error: Error): void {
        console.log(error);
    }
}