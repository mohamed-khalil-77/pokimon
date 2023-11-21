// Pokemon.js
import React, { useState, useEffect } from 'react';

const Pokemon = ({ name }) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(response => response.json())
      .then(data => {
        setPokemonData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [name]);

  return (
    <div className="pokemon">
      {pokemonData && (
        <>
          <img src={pokemonData.sprites.front_default} alt={name} />
          <h3>{name}</h3>
          <div>
            {pokemonData.types.map((type, index) => (
              <span key={index}>{type.type.name}</span>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Pokemon;
