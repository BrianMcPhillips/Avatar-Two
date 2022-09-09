import { useEffect, useState } from 'react';
import { getCharacterById, getCharacters } from '../services/avatar-api';

export const useCharacters = page => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters(page)
      .then(data => setCharacters(data))
      .finally(() => setLoading(false));
  }, [page]);

  return {
    loading,
    characters
  };
};

export const useSingleCharacter = id => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    getCharacterById(id)
      .then(data => setData(data))
      .finally(() => setLoading(false));
  }, [id]);

  return {
    loading,
    data
  };
};
