import React from 'react';
import { useCharacters } from '../../hooks/characters';
import Character from '../Character/Character';
import PropTypes from 'prop-types';

const CharacterList = ({ page }) => {
  const { 
    loading, 
    characters
  } = useCharacters(page);
  const characterStuff = characters.map(character => 
    <li key={character.id}>
      <Character {...character}/>
    </li>
  );

  if(loading) return <h1>Loading...</h1>;
  return (
    <ul data-testid={'characterList'}>
      {characterStuff}
    </ul>
  );
};

CharacterList.propTypes = {
  page: PropTypes.number
};

export default CharacterList;
