import { useContext } from "react";
import { CartContext } from "../context/CartContext";
const Cart = () => {
  const { cartItems } = useContext(CartContext);
  const totalAmount = cartItems.reduce(
    (currentTotal, item) => {
      return currentTotal + item.price;
    },
    0
  );
  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>No items added yet.</p>
      ) : (
        cartItems.map((item, index) => {
          return (
            <div
              className="cart-item"
              key={index}
            >
              <h3>{item.title}</h3>
              <p>${item.price}</p>
            </div>
          );
        })
      )}
      <h2>Total: ${totalAmount}</h2>
    </div>
  );
};
export default Cart;