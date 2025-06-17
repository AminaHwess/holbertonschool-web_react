
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    appHeader: {
        display: "flex"
    },
    appHeaderImage: {
        height: "200px",
        width: "200px",
    },
    appHeaderH1: {
        alignSelf: "center",
        fontFamily: "Arial",
        fontWeight: "bold",
        color: "#e1003c"
    }
})


function Header() {
    return (
        <>
            <div className={css(styles.appHeader)} alt="holberton logo">
            <img className={css(styles.appHeaderImage)} src="src/assets/holberton-logo.jpg" alt="holberton logo" ></img>
            <h1 className={css(styles.appHeaderH1)} role="heading">School dashboard</h1>
            </div>
        </>
    )
}

export default Header
