import React from "react";
import CourseListRow from "./CourseListRow";
import propTypes from "prop-types";
import "./CourseList.css";
import { StyleSheet, css } from "aphrodite";

const CourseList = ({ listCourses }) => {
  return (
    <table id="CourseList" className={css(styles.table)}>
      <thead className={css(styles.th)}>
        <CourseListRow isHeader={true} textFirstCell="Available Courses" />
        <CourseListRow
          isHeader={true}
          textFirstCell="Course name"
          textSecondCell="Credit"
        />
      </thead>

      <tbody id="CourseBody">
        {/* check if listCourses is empty */}
        {listCourses.length === 0 && (
          <tr>
            <td>No course available yet</td>
          </tr>
        )}
        {/* render listCourses */}
        {listCourses.map((course) => (
          <CourseListRow
            key={course.id}
            textFirstCell={course.name}
            textSecondCell={course.credit}
          />
        ))}
      </tbody>
    </table>
  );
};

CourseList.defaultProps = {
  listCourses: [],
};

CourseList.propTypes = {
  listCourses: propTypes.array,
};

const styles = StyleSheet.create({
  table: {
    display: "table",
    border: "1px solid #000",
    borderCollapse: "collapse",
    marginLeft: "auto",
    marginRight: "auto",
    width: "90%",
  },
  th: {
    textAlign: "start",
    borderBottom: "1px solid #000",
  },
  thCenter: {
    textAlign: "center",
    border: "1px solid #000",
    paddingBottom: "1rem",
  },
});

export default CourseList;
