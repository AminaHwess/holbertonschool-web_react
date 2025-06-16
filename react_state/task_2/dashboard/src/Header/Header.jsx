// task_3/dashboard/src/Header/Header.jsx
import React from 'react';
import holberton_logo from '../assets/holberton_logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import { newContext } from '../Context/context'; // Import the newContext

// Define CSS variables
const cssVars = {
	mainColor: '#e01d3f',
};

class Header extends React.Component {
	// Use ContextType API to allow the Header component to inherit the context
	static contextType = newContext;

	render() {
		// Destructure user and logOut from the context
		const { user, logOut } = this.context;

		return (
			<header className={css(styles.header)}>
				{' '}
				{/* Use styles.header */}
				<img
					src={holberton_logo}
					className={css(styles.headerImg)}
					alt='logo'
				/>{' '}
				{/* Use styles.headerImg */}
				<h1>School dashboard</h1>
				{/* New section displayed only when isLoggedIn is true */}
				{user.isLoggedIn && (
					<section className={css(styles.logoutSection)} id='logoutSection'>
						Welcome <b>{user.email}</b> (
						<a href='#' onClick={logOut} className={css(styles.logoutLink)}>
							logout
						</a>
						)
					</section>
				)}
			</header>
		);
	}
}

const styles = StyleSheet.create({
	header: {
		display: 'flex',
		alignItems: 'center',
		color: cssVars.mainColor,
		fontSize: '20px',
		borderBottom: '4px solid #e0354b', // Added border from previous version
		padding: '10px 20px', // Added padding from previous version
	},

	headerImg: {
		width: '200px',
		height: '200px', // Added height for consistency
	},
	logoutSection: {
		marginLeft: 'auto', // Pushes the section to the right
		fontSize: '1.2rem',
		fontWeight: 'normal',
		color: 'black',
		display: 'flex',
		alignItems: 'center',
		gap: '5px',
	},
	logoutLink: {
		cursor: 'pointer',
		color: cssVars.mainColor, // Use mainColor for consistency
		textDecoration: 'underline',
		marginLeft: '5px',
	},
});

export default Header;
