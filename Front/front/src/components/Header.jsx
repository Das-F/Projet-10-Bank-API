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
        <div>
          <a className="nav-item" href="./sign-in.html">
            <img className="nav-user-icon" src={icon} alt="User Icon" />
            Sign In
          </a>
        </div>
      </div>
    </nav>
  );
}
export default Header;
