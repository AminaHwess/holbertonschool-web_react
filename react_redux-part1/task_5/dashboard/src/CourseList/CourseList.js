import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import { useSelector } from 'react-redux';

function CourseList() {
  const courses = useSelector((state) => state.courses.courses);
  return (
    <table className={css(styles.table)}>
      <thead>
        <CourseListRow isHeader textFirstCell="Available courses" />
        <CourseListRow isHeader textFirstCell="Course name" textSecondCell="Credit" />
      </thead>
      <tbody>
        {courses.length > 0 ? (
          courses.map(course => (
            <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit.toString()} />
          ))
        ) : (
          <CourseListRow textFirstCell="No course available yet" colSpan="2" />
        )}
      </tbody>
    </table>
  );
}

const styles = StyleSheet.create({
  table: {
    width: '90%',
    borderCollapse: 'collapse',
    marginLeft: '5%',
    marginTop: '5%',
    border: '1px solid #ddd',
  },
  th: {
    border: '1px solid #ddd',
    padding: '12px',
    textAlign: 'left'
  },
  td: {
    padding: '12px',
    textAlign: 'left'
  },
  trHover: {
    ':hover': {
      backgroundColor: '#f5f5f5'
    }
  }
});

export default CourseList;