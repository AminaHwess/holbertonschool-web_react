// src/pages/CourseList/CourseList.spec.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseList from './CourseList';

describe('CourseList', () => {
  it('renders CourseList component', () => {
    render(<CourseList />);
    expect(screen.getByText('Course List')).toBeInTheDocument();
  });
}); 