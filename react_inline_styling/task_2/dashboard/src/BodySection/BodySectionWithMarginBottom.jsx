import BodySection from './BodySection'
import { StyleSheet, css } from 'aphrodite';


export default function BodySectionWithMarginBottom(props) {
    return (<><div className={css(styles.bodySectionWithMargin)} role='bswm'><BodySection {...props}></BodySection></div></>)
}

const styles = StyleSheet.create({
    bodySectionWithMargin : {
        marginBottom: "40px"
    }
})