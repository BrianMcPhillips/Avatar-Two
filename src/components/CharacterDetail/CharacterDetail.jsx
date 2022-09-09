import React from 'react';
import { useParams } from 'react-router-dom';
import { useSingleCharacter } from '../../hooks/characters';

const CharacterDetail = () => {
  const { id } = useParams();
  const { loading, error, data: {
    image,
    name,
    affiliation,
    allies
  } } = useSingleCharacter(id);

  if(loading) return <h1>Loading...</h1>;
  if(error) return <h1>Something went wrong. Try again</h1>;

  return (
    <div data-testid={'characterDetail'}>
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <h3>{affiliation}</h3>
      <h4>{allies}</h4>
    </div>
  );
};

export default CharacterDetail; 
