import CourseListRow from "./CourseListRow.jsx";
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types'
import withLogging from '../HOC/WithLogging.jsx'
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    table: {
        width: "95%",
        marginTop: "40px",
        marginLeft: "40px",
        marginRight: "40px",
        marginBottom: "300px",
        borderSpacing: "0px",
        border: "0.5px solid #ababab"
    }
})


function CourseList({courses=[]}) {
    return (
        <>
            <table id="CourseList" className={css(styles.table)}>
                <thead>
                    {courses.length != 0 ? (<><CourseListRow key={uuidv4()} isHeader={true} textFirstCell={"Available courses"}></CourseListRow>
                    <CourseListRow key={uuidv4()} isHeader={true} textFirstCell={"Course name"} textSecondCell={"Credit"}></CourseListRow></>): null}
                </thead>
                <tbody>
                    {courses.length == 0 ? ((<CourseListRow key={uuidv4()} isHeader={true} textFirstCell={"No course available yet"}></CourseListRow>)) :
                        (courses.map((obj) => {
                            return (<CourseListRow key={uuidv4()} isHeader={false} textFirstCell={obj.name} textSecondCell={obj.credit}></CourseListRow>)
                        }))
                    }
                </tbody>

            </table>
        </>
    )
}

CourseList.propTypes = {
    courses: PropTypes.array
}


export default withLogging(CourseList)