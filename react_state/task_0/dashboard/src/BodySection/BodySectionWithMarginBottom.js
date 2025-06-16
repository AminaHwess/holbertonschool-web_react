import React from "react";
import BodySection from "./BodySection";
import { StyleSheet, css } from "aphrodite";

const BodySectionWithMarginBottom = ({ title, children }) => {
  return (
    <div className={css(styles.marginBottom)}>
      <BodySection title={title} children={children} />
    </div>
  );
};

const styles = StyleSheet.create({
  marginBottom: {
    marginBottom: "40px",
  },
});

export default BodySectionWithMarginBottom;
