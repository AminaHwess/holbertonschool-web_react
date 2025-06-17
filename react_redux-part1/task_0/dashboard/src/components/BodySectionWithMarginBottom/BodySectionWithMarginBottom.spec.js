import React from 'react';
import { render, screen } from '@testing-library/react';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

describe('BodySectionWithMarginBottom', () => {
  it('renders BodySectionWithMarginBottom component', () => {
    render(<BodySectionWithMarginBottom />);
    expect(screen.getByText('BodySectionWithMarginBottom')).toBeInTheDocument();
  });
}); 