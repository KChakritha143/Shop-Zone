import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <nav className="navbar">
      <h2>ShopZone Store</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">
          Cart ({cartItems.length})
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;