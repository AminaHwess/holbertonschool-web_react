import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications component', () => {
  test('renders the notifications title', () => {
    render(<Notifications />);
    // Check for the title with case-insensitive regex
    expect(screen.getByText(/here is the list of notifications/i)).toBeInTheDocument();
  });

  test('renders the close button', () => {
    render(<Notifications />);
    // Check if the close button is in the document
    const button = screen.getByRole('button', { name: /close/i });
    expect(button).toBeInTheDocument();
  });

  test('renders 3 list items', () => {
    render(<Notifications />);
    // Check if there are 3 <li> elements in the document
    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBe(3);
  });

  test('logs to console when close button is clicked', () => {
    const originalConsoleLog = console.log; // Save the original console.log
    console.log = jest.fn(); // Mock console.log

    render(<Notifications />);

    // Simulate a click on the close button
    fireEvent.click(screen.getByRole('button', { name: /close/i }));

    // Check if console.log was called with the correct message
    expect(console.log).toHaveBeenCalledWith('Close button has been clicked');

    console.log = originalConsoleLog; // Restore original console.log
  });
});
