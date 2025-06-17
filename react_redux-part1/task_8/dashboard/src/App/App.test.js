import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

const mockStore = configureStore([]);

describe('App (Redux)', () => {
  it('renders Login when isLoggedIn is false', () => {
    const store = mockStore({
      auth: { isLoggedIn: false, user: { email: '', password: '' } },
      notifications: { notifications: [], displayDrawer: false },
      courses: { courses: [] },
    });
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(screen.getByText(/Log in to continue/i)).toBeInTheDocument();
    expect(screen.getByText(/Login to access the full dashboard/i)).toBeInTheDocument();
  });

  it('renders CourseList when isLoggedIn is true', () => {
    const store = mockStore({
      auth: { isLoggedIn: true, user: { email: 'test@example.com', password: '' } },
      notifications: { notifications: [], displayDrawer: false },
      courses: { courses: [] },
    });
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(screen.getByText(/Course list/i)).toBeInTheDocument();
  });

  it('renders notification items when notifications are present', () => {
    const store = mockStore({
      auth: { isLoggedIn: false, user: { email: '', password: '' } },
      notifications: {
        notifications: [
          { id: 1, type: 'default', value: 'New course available' },
          { id: 2, type: 'urgent', value: 'New resume available' },
        ],
        displayDrawer: true,
      },
      courses: { courses: [] },
    });
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(screen.getByText('New course available')).toBeInTheDocument();
    expect(screen.getByText('New resume available')).toBeInTheDocument();
  });
});