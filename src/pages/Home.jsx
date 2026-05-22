import { Link } from "react-router-dom";

import shoppingBanner from "../assets/shopping-banner.png";

const Home = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-text">
          <h1>Welcome to ShopZone</h1>

          <p>
            Discover trending products and enjoy
            a smooth online shopping experience.
          </p>

          <Link to="/shop">
            <button>
              Explore Products
            </button>
          </Link>
        </div>

        <div className="hero-image">
          <img
            src={shoppingBanner}
            alt="shopping"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;