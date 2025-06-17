import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { useSelector } from 'react-redux';

function Footer() {
    const user = useSelector((state) => state.auth.user);
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    return (
        <footer className={css(styles.footer)}>
            <em>
                <p>{`© Copyright ${getFullYear()} - ${getFooterCopy(true)}`}</p>
                {isLoggedIn && <p><a href="/contact">Contact us</a></p>}
            </em>
        </footer>
    );
}

const styles = StyleSheet.create({
    footer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
        borderTop: '4px solid #e0003c',
        marginTop: '400px',
    }
});

export default Footer;