import React from 'react';
import { useParams } from 'react-router-dom';
import { useSingleCharacter } from '../../hooks/characters';

const CharacterDetail = () => {
  const { id } = useParams();
  const { loading, data } = useSingleCharacter(id);

  if(loading) return <h1>Loading...</h1>;
};

export default CharacterDetail; 
