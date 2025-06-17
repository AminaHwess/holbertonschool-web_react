import reducer, { fetchCourses } from '../courses/coursesSlice';
import { logout } from '../auth/authSlice';
import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const API_BASE_URL = 'http://localhost:5173';
const ENDPOINTS = {
  courses: `${API_BASE_URL}/courses.json`,
};

describe('coursesSlice', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual({ courses: [] });
  });

  it('should fetch courses data', async () => {
    const mock = new MockAdapter(axios);
    const mockCourses = [
      { id: 1, name: 'Course 1' },
      { id: 2, name: 'Course 2' },
    ];
    mock.onGet(ENDPOINTS.courses).reply(200, mockCourses);

    const store = configureStore({ reducer: reducer });
    await store.dispatch(fetchCourses());
    expect(store.getState().courses).toEqual(mockCourses);
    mock.restore();
  });

  it('should reset courses array to empty on logout', () => {
    const prevState = { courses: [{ id: 1, name: 'Course 1' }] };
    const nextState = reducer(prevState, logout());
    expect(nextState.courses).toEqual([]);
  });
}); 