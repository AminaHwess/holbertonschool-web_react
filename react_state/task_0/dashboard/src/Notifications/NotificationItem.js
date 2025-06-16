import React from "react";
import { StyleSheet, css } from "aphrodite";

const NotificationItem = ({ id, html, type, value, markAsRead }) => {
  if (html) {
    return (
      <li
        onClick={() => {
          markAsRead(id);
        }}
        data-notification-type={type}
        className={css(
          type === "default" ? styles.default : styles.urgent,
          styles.notificationItem
        )}
        dangerouslySetInnerHTML={html}
      ></li>
    );
  }
  return (
    <li
      onClick={() => {
        markAsRead(id);
      }}
      data-notification-type={type}
      className={css(
        type === "default" ? styles.default : styles.urgent,
        styles.notificationItem
      )}
    >
      {value}
    </li>
  );
};

const styles = StyleSheet.create({
  notificationItem: {
    width: "100%",
    borderBottom: "1px solid black",
    fontSize: "20px",
    padding: "10px 8px",
    boxSizing: "border-box",
  },
  default: {
    color: "blue",
  },
  urgent: {
    color: "red",
  },
});

export default React.memo(NotificationItem);
