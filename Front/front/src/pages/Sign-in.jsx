import "../styles/Sign-in.css";
import { Link } from "react-router-dom";
import icon from "../assets/img/circle-user-solid-full.svg";
import Header from "../components/Header";
import Footer from "../components/Footer";

function SignIn() {
  return (
    <>
      <Header />
      <div className="sign-in-background">
        <section className="sign-in-content">
          <div className="sign-in-box">
            <img className="nav-user-icon" src={icon} alt="User Icon" />
            <h1>Sign In</h1>
            <form>
              <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" />
              </div>
              <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
              </div>
              <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
              </div>
              {/* PLACEHOLDER DUE TO STATIC SITE */}
              <Link to="./user.html" className="sign-in-button">
                Sign In
              </Link>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
export default SignIn;
