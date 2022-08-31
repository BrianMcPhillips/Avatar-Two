import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CharacterList from './CharacterList';

describe('CharacterList component', () => {
  it('displays a list of characters after a brief load', async() => {
    render(<CharacterList />);

    screen.getByText('Loading...');

    const characterList = await screen.findByTestId('characterList');

    return waitFor(() => {
      expect(characterList.not.toBeEmptyDOMElement());
    });
  });
});
