import "../styles/User.css";
import { Link } from "react-router-dom";
import icon from "../assets/img/circle-user-solid-full.svg";
import HeaderSignOut from "../components/Header-sign-out";
import Footer from "../components/Footer";

function User() {
  return (
    <>
      <HeaderSignOut />
      <div className="user-page">
        <h1>User Page</h1>
        <img src={icon} alt="User Icon" />
        <p>Welcome to your user page!</p>
        <Link to="/">Go back to Home</Link>
      </div>
      <Footer />
    </>
  );
}

export default User;
