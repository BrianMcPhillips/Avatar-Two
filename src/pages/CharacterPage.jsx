import React, { useState } from 'react';
import CharacterList from '../components/CharacterList/CharacterList';

const CharacterPage = () => {
  const [page, setPage] = useState(1);

  return (
    <div>
      <CharacterList page={page}/>
      <div>
        <button
          onClick={() => setPage(page => page + 1)}
          disabled={page <= 1}
        >&lt;</button>
        <button
          onClick={() => setPage(page => page - 1)}
          disabled={page >= 4}
        >&gt;</button>
      </div>
    </div>
  );
};

export default CharacterPage;
