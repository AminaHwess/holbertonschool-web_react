import React from 'react';
import NotificationItem from '../NotificationItem/NotificationItem';

const Notifications = ({ notifications = [] }) => (
  <div>
    <ul>
      {notifications.map((n) => (
        <NotificationItem key={n.id} {...n} />
      ))}
    </ul>
  </div>
);

export default Notifications; 