import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="hero-section">
      <div className="card-grid">
        <Link className="card" to="/ChatApp">
          <div className="card__background first"></div>
          <div className="card__content">
            <p className="card__category">App</p>
            <h3 className="card__heading">ChatApp</h3>
          </div>
        </Link>
        <Link className="card" to="/CodePen">
          <div className="card__background"></div>
          <div className="card__content">
            <p className="card__category">App</p>
            <h3 className="card__heading">CodePen Clone</h3>
          </div>
        </Link>

        <a
          className="card"
          href="https://priceless-bhaskara-35827c.netlify.app/"
        >
          <div className="card__background second"></div>
          <div className="card__content">
            <p className="card__category">App</p>
            <h3 className="card__heading">Live Canvas</h3>
          </div>
        </a>

        <a className="card" href="#">
          <div className="card__background"></div>
          <div className="card__content">
            <p className="card__category">Category</p>
            <h3 className="card__heading">Example Card Heading</h3>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Home;
