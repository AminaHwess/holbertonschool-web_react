import React from 'react';
import { render, screen } from '@testing-library/react';
import BodySection from './BodySection';

describe('BodySection', () => {
  it('renders BodySection component', () => {
    render(<BodySection />);
    expect(screen.getByText('BodySection')).toBeInTheDocument();
  });
}); 