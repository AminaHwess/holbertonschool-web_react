import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('renders Footer component', () => {
    render(<Footer />);
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });
}); 