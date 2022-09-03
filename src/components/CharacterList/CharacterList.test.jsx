import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CharacterList from './CharacterList';
import { getCharacters } from '../../services/avatar-api';

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
    render(<CharacterList />);

    screen.getByText('Loading...');

    const characterList = await screen.findByTestId('characterList');

    return waitFor(() => {
      expect(characterList).not.toBeEmptyDOMElement();
      expect(characterList).toHaveTextContent('test dos');
    });
  });
});
