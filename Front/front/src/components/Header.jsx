import "../styles/Header.css";
import logo from "../assets/img/argentBankLogo.png";
import icon from "../assets/img/circle-user-solid-full.svg";

function Header() {
  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-logo">
          <img className="nav-logo-image" src={logo} alt="Argent Bank Logo" />
        </div>
        <div className="nav-sign-in">
          <img className="nav-user-icon" src={icon} alt="User Icon" />
          <a className="nav-link" href="./sign-in.html">
            <h2>Sign In</h2>
          </a>
        </div>
      </div>
    </nav>
  );
}
export default Header;
