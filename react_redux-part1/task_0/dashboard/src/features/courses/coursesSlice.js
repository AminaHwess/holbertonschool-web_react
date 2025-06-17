// src/features/courses/coursesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  courses: [],
};

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setCourses(state, action) {
      state.courses = action.payload;
    },
    addCourse(state, action) {
      state.courses.push(action.payload);
    },
    removeCourse(state, action) {
      state.courses = state.courses.filter(
        (c) => c.id !== action.payload
      );
    },
  },
});

export const { setCourses, addCourse, removeCourse } = coursesSlice.actions;
export default coursesSlice.reducer; 