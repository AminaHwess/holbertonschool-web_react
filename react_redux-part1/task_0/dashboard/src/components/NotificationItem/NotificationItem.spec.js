import React from 'react';
import { render, screen } from '@testing-library/react';
import NotificationItem from './NotificationItem';

describe('NotificationItem', () => {
  it('renders value', () => {
    render(<NotificationItem value="Test notification" />);
    expect(screen.getByText('Test notification')).toBeInTheDocument();
  });

  it('renders html', () => {
    render(<NotificationItem html="<strong>HTML</strong>" />);
    expect(screen.getByText('HTML')).toBeInTheDocument();
  });
}); 