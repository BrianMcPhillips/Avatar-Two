import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CharacterDetail from './CharacterDetail';
import { getCharacterById } from '../../services/avatar-api';

jest.mock('../../services/avatar-api.js');

describe('CharacterDetail component', () => {
  beforeEach(() => {
    getCharacterById.mockResolvedValue({
      allies: [
        'His '
      ],
      // eslint-disable-next-line max-len
      photoUrl: 'https://vignette.wikia.nocookie.net/avatar/images/6/6f/Arik.png/revision/latest?cb=20140808184002',
      name: 'Arik',
      affiliation: 'Earth Kingdom Air Force'
    });
  });

  it('display a character after a load', async() => {
    render(<CharacterDetail />);

    screen.getByText('Loading...');
    const characterDetail = await screen.findByTestId('characterDetail');

    return waitFor(() => {
      expect(characterDetail).not.toBeEmptyDOMElement();
    });
  });
});
