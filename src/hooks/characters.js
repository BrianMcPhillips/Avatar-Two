import { useEffect, useState } from 'react';

export const useCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {

  }, []);

  return {
    loading,
    characters
  };
};
