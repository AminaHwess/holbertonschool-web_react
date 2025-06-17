import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseListRow from './CourseListRow';

describe('CourseListRow', () => {
  it('renders CourseListRow component', () => {
    render(<table><tbody><CourseListRow /></tbody></table>);
    expect(screen.getByText('Course Row')).toBeInTheDocument();
  });
}); 