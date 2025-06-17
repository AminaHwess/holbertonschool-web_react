import React from 'react';
import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications', () => {
  it('renders notifications list', () => {
    const notifications = [
      { id: 1, value: 'Test 1' },
      { id: 2, value: 'Test 2' },
    ];
    render(<Notifications notifications={notifications} />);
    expect(screen.getByText('Test 1')).toBeInTheDocument();
    expect(screen.getByText('Test 2')).toBeInTheDocument();
  });
}); 