import authReducer, { login, logout } from '../auth/authSlice';

describe('authSlice', () => {
  const initialState = {
    user: {
      email: '',
      password: '',
    },
    isLoggedIn: false,
  };

  it('should return the initial state by default', () => {
    expect(authReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('should handle login', () => {
    const action = login({ email: 'test@email.com', password: '1234' });
    const state = authReducer(initialState, action);
    expect(state).toEqual({
      user: {
        email: 'test@email.com',
        password: '1234',
      },
      isLoggedIn: true,
    });
  });

  it('should handle logout', () => {
    const loggedInState = {
      user: {
        email: 'test@email.com',
        password: '1234',
      },
      isLoggedIn: true,
    };
    const state = authReducer(loggedInState, logout());
    expect(state).toEqual(initialState);
  });
}); 