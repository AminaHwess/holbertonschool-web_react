import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function NotificationItem({ type, html, value, markAsRead, id }) {
  return (
    <li
      className={css(styles.notificationItem, styles[type])}
      data-notification-type={type}
      onClick={() => markAsRead(id)}
    >
      {html ? <span dangerouslySetInnerHTML={html} /> : value}
    </li>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
  value: PropTypes.string,
  markAsRead: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};

NotificationItem.defaultProps = {
  type: 'default',
};

const styles = StyleSheet.create({
  default: {
    color: 'blue',
  },
  urgent: {
    color: 'red',
  },
  notificationItem: {
    width: '100%',
    borderBottom: '1px solid black',
    fontSize: '20px',
    padding: '10px 8px',
  },
});

export default React.memo(NotificationItem);
