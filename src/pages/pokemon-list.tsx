import React, { FunctionComponent, useState, useEffect } from 'react';
import { Pokemon } from '../models/pokemon';
import { POKEMONS } from '../models/mock.pokemon';
import PokemonCard from '../components/pokemon-card';
import PokemonSearch from '../components/pokemon-search';
import { usePokemons } from '../hooks/pokemon.hook';
import { Link } from 'react-router-dom';



const PokemonList: FunctionComponent = () => {
  //  const history=useHistory();
  /*
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  
  useEffect(() => {
    setPokemons(POKEMONS);
  }, []);*/
  const pokemons = usePokemons();
  // const goToAddPokemonPage=():void=>{
  //   history.push(`/pokemons/add`);
  // }

  return (
    <div>
      <h1 className="center">Pokédex</h1>
      <div className="container">
        {/* <button onClick={goToAddPokemonPage} className='btn'>Ajouter un nouveau pokemon</button> */}
        <div className="row">
          <PokemonSearch />
          {pokemons.map(pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} borderColor='red' />
          ))}
        </div>
        <Link to="/pokemon/add" className="btn-floating btn-large waves-effect waves-light red z-depth-3"
          style={{ position: 'fixed', bottom: '25px', right: '25px' }}>
          <i className='material-icons'>add</i>
        </Link>
      </div>
    </div>
  );
}

export default PokemonList;