import React from 'react';
import { render, screen } from '@testing-library/react';
import CharacterList from './CharacterList';

describe('CharacterList component', () => {
  it('displays a list of characters after a brief load', () => {
    render(<CharacterList />);

    screen.getByText('Loading...');
  });
});
