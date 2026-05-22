import { useNavigate } from "react-router-dom";
const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const openProduct = () => {
    navigate(`/product/${product.id}`);
  };
  return (
    <div
      className="product-card"
      onClick={openProduct}
    >
      <img
        src={product.thumbnail}
        alt={product.title}
      />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
    </div>
  );
};
export default ProductCard;