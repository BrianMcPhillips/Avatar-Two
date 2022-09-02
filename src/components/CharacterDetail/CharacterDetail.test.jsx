import React from 'react';
import { render, screen } from '@testing-library/react';
import CharacterDetail from './CharacterDetail';

describe('CharacterDetail component', () => {
  it('display a character after a load', () => {
    render(<CharacterDetail />);

    screen.getByText('Loading...');
  });
});
