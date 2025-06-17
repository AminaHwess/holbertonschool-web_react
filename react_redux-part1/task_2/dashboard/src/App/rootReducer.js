import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../../task_1/dashboard/src/features/auth/authSlice';
import notificationsReducer from '../../task_1/dashboard/src/features/notifications/notificationsSlice';
import coursesReducer from '../../task_1/dashboard/src/features/courses/coursesSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  notifications: notificationsReducer,
  courses: coursesReducer,
});

export default rootReducer; 