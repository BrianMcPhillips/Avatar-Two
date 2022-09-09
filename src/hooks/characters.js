import { useEffect, useState } from 'react';
import { getCharacterById, getCharacters } from '../services/avatar-api';

export const useCharacters = page => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCharacters(page)
      .then(data => setCharacters(data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, [page]);

  return {
    loading,
    characters,
    error
  };
};

export const useSingleCharacter = id => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    getCharacterById(id)
      .then(data => setData(data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, [id]);

  return {
    loading,
    data,
    error
  };
};
