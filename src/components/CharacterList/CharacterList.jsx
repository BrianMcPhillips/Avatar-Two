import React from 'react';
import { useCharacters } from '../../hooks/characters';

const CharacterList = () => {
  const { loading } = useCharacters();

  if(loading) return <h1>Loading...</h1>;
};

export default CharacterList;
