import { useEffect, useState } from 'react';
import { getCharacters } from '../services/avatar-api';

export const useCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters()
      .then(data => setCharacters(data))
      .finally(() => setLoading(false));
  }, []);

  return {
    loading,
    characters
  };
};

export const useSingleCharacter = id => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {

  }, []);

  return {
    loading,
    data
  };
};
