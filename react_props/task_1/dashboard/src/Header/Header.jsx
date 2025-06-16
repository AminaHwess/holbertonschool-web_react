import "./Header.css";
import logo from "../assets/holberton-logo.jpg";

function Header() {
  return (
    <>
      <header className="App-header" role="banner">
        <img src={logo} alt="holberton logo" />
        <h1 role="heading">School dashboard</h1>
      </header>
    </>
  );
}

export default Header;
