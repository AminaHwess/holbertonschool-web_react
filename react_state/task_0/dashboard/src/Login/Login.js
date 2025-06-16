import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={css(styles.app)}>
          <div className={css(styles.appBody)}>
            <p>Login to access the full dashboard</p>
            <div className={css(styles.inputs)}>
              <label
                htmlFor="email"
                className={css(styles.label)}
                onClick={() => {
                  // select corresponding input
                  document.getElementById("password").focus();
                }}
              >
                Email
              </label>
              <input type="email" id="email" className={css(styles.input)} />
              <label
                htmlFor="password"
                className={css(styles.label)}
                onClick={() => {
                  // select corresponding input
                  document.getElementById("password").focus();
                }}
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className={css(styles.input)}
              />
              <button className={css(styles.button)}>OK</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "column",
  },
  appBody: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "3rem",
    paddingTop: "1rem",
    minHeight: "50vh",
  },
  inputs: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  input: {
    height: "15px",
    marginLeft: "0.2rem",
    marginBottom: "1rem",
  },
  label: {
    marginLeft: "0.3rem",
    marginBottom: "0.5rem",
  },
  button: {
    height: "21px",
    marginTop: "1rem",
  },
  "@media (max-width: 900px)": {
    inputs: {
      flexDirection: "column",
    },
    input: {
      marginLeft: "0",
    },
    button: {
      marginLeft: "0",
      width: "auto",
    },
  },
});
