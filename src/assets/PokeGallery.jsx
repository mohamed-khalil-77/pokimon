// PokeGallery.js
import React, { useState, useEffect } from 'react';
import Pokemon from './Pokemon';

const PokeGallery = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=12')
      .then(response => response.json())
      .then(data => {
        setPokemonList(data.results);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Pokémon Gallery</h1>
      <div className="pokemon-container">
        {pokemonList.map((pokemon, index) => (
          <Pokemon key={index} name={pokemon.name} />
        ))}
      </div>
    </div>
  );
};

export default PokeGallery;
