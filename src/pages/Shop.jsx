import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching products", error);
      });
  }, []);
  if (loading) {
    return <h2>Loading products...</h2>;
  }
  return (
    <div className="products-container">
      {products.map((singleProduct) => {
        return (
          <ProductCard
            key={singleProduct.id}
            product={singleProduct}
          />
        );
      })}
    </div>
  );
};
export default Shop;