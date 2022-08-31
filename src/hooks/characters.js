import { useState } from 'react';

export const useCharacters = () => {
  const [loading, setLoading] = useState(true);


  return {
    loading
  };
};
