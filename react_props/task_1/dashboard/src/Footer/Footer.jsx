import "./Footer.css";
import { getCurrentYear, getFooterCopy } from "../utils/utils.js";

function Footer({ isIndex = false }) {
  return (
    <>
      <footer className="App-footer" role="contentinfo">
        <p>
          Copyright {getCurrentYear()} - {getFooterCopy(isIndex)}
        </p>
      </footer>
    </>
  );
}

export default Footer;
