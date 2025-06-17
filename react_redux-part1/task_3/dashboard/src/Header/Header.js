import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/Holberton_Logo.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../task_1/dashboard/src/features/auth/authSlice';

function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <header className={css(styles.header)}>
      <div className={css(styles.logoContainer)}>
        <img src={logo} className={css(styles.logo)} alt="logo" />
        <h1 className={css(styles.headerTitle)}>School dashboard</h1>
      </div>
      {isLoggedIn && (
        <div id="logoutSection" className={css(styles.logoutSection)}>
          <span>Welcome {user.email} (<a href="#" onClick={handleLogout}>logout</a>)</span>
        </div>
      )}
    </header>
  );
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    borderBottom: '4px solid #e0003c',
    justifyContent: 'space-between',
    height: '230px',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: '200px',
  },
  headerTitle: {
    display: 'flex',
    alignItems: 'center',
    color: '#e0003c',
  },
  logoutSection: {
    display: 'flex',
    alignItems: 'center',
    color: '#e0003c',
  },
});

export default Header;