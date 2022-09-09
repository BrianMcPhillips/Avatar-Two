import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CharacterList from './CharacterList';
import { getCharacters } from '../../services/avatar-api';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../../services/avatar-api.js');

describe('CharacterList component', () => {
  beforeEach(getCharacters.mockResolvedValue([
    {
      id: 4,
      name: 'test',
      image: 'test.png'
    },
    {
      id: 5,
      name: 'test dos',
      image: 'test2.png'
    }
  ]));

  it('displays a list of characters after a brief load', async() => {
    render(
      <MemoryRouter>
        <CharacterList />
      </MemoryRouter>
    );

    screen.getByText('Loading...');

    const characterList = await screen.findByTestId('characterList');

    return waitFor(() => {
      expect(characterList).not.toBeEmptyDOMElement();
      expect(characterList).toHaveTextContent('test dos');
    });
  });

  it('displays error message on error', () => {
    getCharacters.mockRejectedValue('Unable to fetch from API');
    render(
      <MemoryRouter>
        <CharacterList />
      </MemoryRouter>
    );
    
    return screen.findByText('Something went wrong. Try again');
  });
});
