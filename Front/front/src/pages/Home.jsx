import "../styles/home.css";
import Header from "../components/Header";
import backgroundImage from "../assets/img/bank-tree.jpeg";

function Home() {
  return (
    <>
      <Header />
      <div className="hero">
        <img src={backgroundImage} className="Banking-background" alt="Banking background" />
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
    </>
  );
}
export default Home;
