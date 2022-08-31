import React from 'react';
import { useCharacters } from '../../hooks/characters';
import Character from '../Character/Character';

const CharacterList = () => {
  const { loading, characters } = useCharacters();
  const characterStuff = characters.map(character => 
    <li key={character.id}>
      <Character {...character}/>
    </li>
  );

  if(loading) return <h1>Loading...</h1>;
  return (
    <ul>
      {characterStuff}
    </ul>
  );
};

export default CharacterList;
