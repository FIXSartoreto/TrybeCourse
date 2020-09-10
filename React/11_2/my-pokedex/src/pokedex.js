import React from 'react';
import pokemons from './data';

class Pokedex extends React.Component {
  render() {
    return (
      <div className='all'>
        <h1>POKEDEX</h1>
        <div className='allPokes'>
          {pokemons.map(poke =>
            <div key={poke.id} className='pokemon'>
              <ul>
                <li>{poke.name}</li>
                <li>{poke.type}</li>
                <li>`{poke.averageWeight.value} {poke.averageWeight.measurementUnit}`</li>
                <img src={poke.image} alt={poke.name} />
              </ul>
            </div>
          )};
        </div>
      </div>
    );
  }
}

export default Pokedex;