import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ type = 'default', value, html }) => {
  if (html) {
    return <li data-notification-type={type} dangerouslySetInnerHTML={{ __html: html }} />;
  }
  return <li data-notification-type={type}>{value}</li>;
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.string,
};

export default NotificationItem; 