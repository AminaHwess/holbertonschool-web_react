import React from "react";
import propTypes from "prop-types";

const rowStyle = { backgroundColor: "#f5f5f5ab" };
const headerStyle = { backgroundColor: "#deb5b545" };

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  if (isHeader) {
    if (textSecondCell === null) {
      return (
        <tr style={{ rowStyle }}>
          <th style={{ headerStyle }}>{textFirstCell}</th>
        </tr>
      );
    } else {
      return (
        <tr style={{ rowStyle }}>
          <th style={{ headerStyle }}>{textFirstCell}</th>
          <th style={{ headerStyle }}>{textSecondCell}</th>
        </tr>
      );
    }
  }
  return (
    <tr style={{ rowStyle }}>
      <td>{textFirstCell}</td>
      <td>{textSecondCell}</td>
    </tr>
  );
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

CourseListRow.propTypes = {
  isHeader: propTypes.bool,
  textFirstCell: propTypes.string.isRequired,
  textSecondCell: propTypes.oneOfType([propTypes.string, propTypes.number]),
};

export default CourseListRow;
