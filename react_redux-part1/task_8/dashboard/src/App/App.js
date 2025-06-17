import React, { useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNotifications } from '../../task_1/dashboard/src/features/notifications/notificationsSlice';
import { fetchCourses } from '../../task_1/dashboard/src/features/courses/coursesSlice';

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    dispatch(fetchNotifications());
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchCourses());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <div className={css(styles.app)}>
      <Notifications />
      <Header />
      <div className={css(styles.appBody)}>
        {isLoggedIn ? (
          <BodySectionWithMarginBottom title="Course list">
            <CourseList />
          </BodySectionWithMarginBottom>
        ) : (
          <BodySectionWithMarginBottom title="Log in to continue">
            <Login />
          </BodySectionWithMarginBottom>
        )}
        <BodySection title="News from the School">
          <p>Keep up to date with the latest news from our school by checking back here regularly for updates and announcements.</p>
        </BodySection>
      </div>
      <Footer />
    </div>
  );
}

const styles = StyleSheet.create({
  app: {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  appBody: {
    margin: '30px',
    width: '80%',
  },
});

export default App;