import "../styles/Header.css";

function Header() {
  return (
    <nav className="main-nav">
      <div className="main-nav-logo">
        <img className="main-nav-logo-image" src="./assets/img/argentBankLogo.png" alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </div>
      <div>
        <a className="main-nav-item" href="./sign-in.html">
          <i className="fa fa-user-circle"></i>
          Sign In
        </a>
      </div>
    </nav>
  );
}
export default Header;
