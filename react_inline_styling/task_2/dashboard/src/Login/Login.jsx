
import withLogging from '../HOC/WithLogging.jsx'
import { StyleSheet, css } from 'aphrodite';

const style = StyleSheet.create({
    appBody: {
        height: "500px",
        margin: "30px 15px"
    },
    input: {
        marginRight: "10px",
        marginLeft: "10px"
    }

})


 function Login() {
    return (
        <>
        <div className={css(style.appBody)}><p>Login to access the full dashboard</p>
        <label htmlFor="email">Email</label>
        <input id="email" data-testid="email" className={css(style.input)}></input>
        <label htmlFor="pw">Password</label>
        <input id="pw" data-testid="pw" className={css(style.input)}></input>
        <button data-testid="btn" type='submit'>OK</button>
        </div>          
        </>
    )
 }

 export default withLogging(Login)
