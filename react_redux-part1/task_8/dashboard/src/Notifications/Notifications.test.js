import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';
import { markNotificationAsRead, showDrawer, hideDrawer } from '../../task_1/dashboard/src/features/notifications/notificationsSlice';

const mockStore = configureStore([]);

describe('Notifications (Redux)', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      notifications: {
        notifications: [
          { id: 1, type: 'default', value: 'New course available' },
          { id: 2, type: 'urgent', value: 'New resume available' },
        ],
        displayDrawer: false,
      },
    });
    store.dispatch = jest.fn();
  });

  it('renders menu item when drawer is closed', () => {
    render(
      <Provider store={store}>
        <Notifications />
      </Provider>
    );
    expect(screen.getByTestId('menuItem')).toBeInTheDocument();
    expect(screen.queryByTestId('notifications')).not.toBeInTheDocument();
  });

  it('renders notifications drawer when open', () => {
    store = mockStore({
      notifications: {
        notifications: [
          { id: 1, type: 'default', value: 'New course available' },
        ],
        displayDrawer: true,
      },
    });
    render(
      <Provider store={store}>
        <Notifications />
      </Provider>
    );
    expect(screen.getByTestId('notifications')).toBeInTheDocument();
    expect(screen.getByText('Here is your notification list')).toBeInTheDocument();
  });

  it('dispatches showDrawer when menu item is clicked', () => {
    render(
      <Provider store={store}>
        <Notifications />
      </Provider>
    );
    fireEvent.click(screen.getByTestId('menuItem'));
    expect(store.dispatch).toHaveBeenCalledWith(showDrawer());
  });

  it('dispatches hideDrawer when close button is clicked', () => {
    store = mockStore({
      notifications: {
        notifications: [],
        displayDrawer: true,
      },
    });
    store.dispatch = jest.fn();
    render(
      <Provider store={store}>
        <Notifications />
      </Provider>
    );
    fireEvent.click(screen.getByRole('button'));
    expect(store.dispatch).toHaveBeenCalledWith(hideDrawer());
  });

  it('dispatches markNotificationAsRead when a notification is clicked', () => {
    store = mockStore({
      notifications: {
        notifications: [
          { id: 1, type: 'default', value: 'New course available' },
        ],
        displayDrawer: true,
      },
    });
    store.dispatch = jest.fn();
    render(
      <Provider store={store}>
        <Notifications />
      </Provider>
    );
    fireEvent.click(screen.getByText('New course available'));
    expect(store.dispatch).toHaveBeenCalledWith(markNotificationAsRead(1));
  });
});