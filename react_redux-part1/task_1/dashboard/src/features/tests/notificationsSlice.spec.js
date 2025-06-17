import reducer, {
  fetchNotifications,
  markNotificationAsRead,
  showDrawer,
  hideDrawer,
} from '../notifications/notificationsSlice';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getLatestNotification } from '../../utils/utils';

jest.mock('../../utils/utils', () => ({
  getLatestNotification: jest.fn(() => '<strong>Urgent requirement</strong>'),
}));

describe('notificationsSlice', () => {
  const initialState = {
    notifications: [],
    displayDrawer: true,
  };

  it('should return the initial state by default', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('should fetch notifications data correctly', async () => {
    const mock = new MockAdapter(axios);
    const notificationsData = [
      { id: 1, value: 'Test 1' },
      { id: 2, value: 'Test 2' },
      { id: 3, value: 'Old value' },
    ];
    mock.onGet('http://localhost:5173/notifications.json').reply(200, notificationsData);
    const thunk = fetchNotifications();
    const dispatch = jest.fn();
    const getState = jest.fn();
    const result = await thunk(dispatch, getState, undefined);
    expect(result.payload[2].value).toBe('<strong>Urgent requirement</strong>');
    mock.restore();
  });

  it('should remove a notification when markNotificationAsRead is dispatched', () => {
    const state = {
      notifications: [
        { id: 1, value: 'Test 1' },
        { id: 2, value: 'Test 2' },
      ],
      displayDrawer: true,
    };
    const nextState = reducer(state, markNotificationAsRead(1));
    expect(nextState.notifications).toEqual([{ id: 2, value: 'Test 2' }]);
  });

  it('should set displayDrawer to true when showDrawer is dispatched', () => {
    const state = { ...initialState, displayDrawer: false };
    const nextState = reducer(state, showDrawer());
    expect(nextState.displayDrawer).toBe(true);
  });

  it('should set displayDrawer to false when hideDrawer is dispatched', () => {
    const state = { ...initialState, displayDrawer: true };
    const nextState = reducer(state, hideDrawer());
    expect(nextState.displayDrawer).toBe(false);
  });
}); 