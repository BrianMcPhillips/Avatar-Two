import React from 'react';
import { useParams } from 'react-router-dom';
import { useSingleCharacter } from '../../hooks/characters';

const CharacterDetail = () => {
  const { id } = useParams();
  const { loading, data: {
    image,
    name,
    affiliation,
    allies
  } } = useSingleCharacter(id);

  if(loading) return <h1>Loading...</h1>;
  return (
    <div>
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <h3>{affiliation}</h3>
      <h4>{allies}</h4>
    </div>
  );
};

export default CharacterDetail; 
