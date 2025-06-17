import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    tableHeader: {
        border: "0.5px solid #ababab"
    },
    tableData: {
        border: "0.5px solid #ababab",
        height: "20px"
    }
})

export default function CourseListRow({isHeader=false, textFirstCell="", textSecondCell=null}) {
    const RowStyle = {
        backgroundColor: "#f5f5f5ab"
    }

    const HeaderRowStyle = {
        backgroundColor: "#deb5b545"
    }

    if (isHeader == true) {
        if (textSecondCell == null) {
            return (<><tr><th className={css(styles.tableHeader)} style={HeaderRowStyle} colSpan={2} role="cell">{textFirstCell}</th></tr></>)
        }
        else {
            return (
                <>
                    <tr>
                    <th style={HeaderRowStyle} className={css(styles.tableHeader)} role="cell">{textFirstCell}</th>
                    <th style={HeaderRowStyle} className={css(styles.tableHeader)} role="cell">{textSecondCell}</th>
                    </tr>
                </>
            )
        }
    }
    else {
        return (
            <>
                <tr>
                <td role="cell" style={RowStyle } className={css(styles.tableData)}>{textFirstCell}</td>
                <td role="cell" style={RowStyle} className={css(styles.tableData)}>{textSecondCell}</td>
                </tr>
            </>
        )
    }
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string,
    textSecondCell: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object])
}
