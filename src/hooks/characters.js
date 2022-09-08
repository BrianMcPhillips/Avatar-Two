import { useEffect, useState } from 'react';
import { getCharacterById, getCharacters } from '../services/avatar-api';

export const useCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getCharacters(page)
      .then(data => setCharacters(data))
      .finally(() => setLoading(false));
  }, [page]);

  const pageUp = () => setPage(() => page + 1);
  const pageDown = () => setPage(() => page - 1);

  return {
    loading,
    characters,
    page,
    pageUp,
    pageDown
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
