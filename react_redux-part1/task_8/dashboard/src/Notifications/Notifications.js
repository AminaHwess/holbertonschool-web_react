import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem';
import { useSelector, useDispatch } from 'react-redux';
import { markNotificationAsRead, showDrawer, hideDrawer } from '../../task_1/dashboard/src/features/notifications/notificationsSlice';

function Notifications() {
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.notifications.notifications);
  const displayDrawer = useSelector((state) => state.notifications.displayDrawer);
  const drawerStyle = displayDrawer ? styles.drawerOpen : styles.drawerClosed;

  const handleDisplayDrawer = () => dispatch(showDrawer());
  const handleHideDrawer = () => dispatch(hideDrawer());
  const handleMarkAsRead = (id) => dispatch(markNotificationAsRead(id));

  return (
    <div className={css(styles.notificationsContainer)}>
      {!displayDrawer && (
        <div className={css(styles.menuItem)} data-testid="menuItem" onClick={handleDisplayDrawer}>
          Your notifications
        </div>
      )}
      {displayDrawer && (
        <div className={css(styles.notifications, drawerStyle)} data-testid="notifications">
          <div className={css(styles.drawerHeader)}>
            <p className={css(styles.headerText)}>Here is your notification list</p>
            <button className={css(styles.closeButton)} onClick={handleHideDrawer}>X</button>
          </div>
          <ul className={css(styles.notificationsUl)}>
            {notifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                type={notification.type}
                value={notification.value}
                html={notification.html}
                markAsRead={() => handleMarkAsRead(notification.id)}
                id={notification.id}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

const bounce = {
  '0%': {
    transform: 'translateY(0px)',
  },
  '50%': {
    transform: 'translateY(-5px)',
  },
  '100%': {
    transform: 'translateY(5px)',
  },
};

const opacityChange = {
  '0%': {
    opacity: 0.5,
  },
  '100%': {
    opacity: 1,
  },
};

const styles = StyleSheet.create({
  notificationsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '98%',
    margin: '15px',
    gap: '15px',
    position: 'absolute',
  },
  notifications: {
    display: 'flex',
    flexDirection: 'column',
    border: '2px dashed #e0003c',
    alignItems: 'flex-start',
    width: '40%',
    position: 'absolute',
    right: '15px',
    '@media (max-width: 768px)': {
      border: 'none',
      width: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
      height: '100%',
      backgroundColor: 'white',
      zIndex: 1000,
      fontSize: '20px',
      padding: 0,
    },
  },
  drawerClosed: {
    display: 'block',
  },
  drawerOpen: {
    display: 'block',
  },
  drawerHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    borderBottom: '1px solid black',
  },
  headerText: {
    margin: 0,
  },
  closeButton: {
    background: 'none',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  menuItem: {
    display: 'flex',
    justifyContent: 'flex-end',
    cursor: 'pointer',
    float: 'right',
    backgroundColor: '#fff8f8',
    width: '100%',
    '@media (min-width: 769px)': {
      justifyContent: 'flex-end',
      float: 'right',
      backgroundColor: 'initial',
    },
    ':hover': {
      animationName: [bounce, opacityChange],
      animationDuration: '0.5s, 1s',
      animationIterationCount: '3',
    },
  },
  notificationsUl: {
    padding: '20px 10px 20px 40px',
    '@media (max-width: 768px)': {
      padding: 0,
    },
  },
});

export default React.memo(Notifications);