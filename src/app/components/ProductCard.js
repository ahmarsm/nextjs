import AddToCartButton from "./AddToCartButton";

export default function ProductCard({ product }) {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ₹{product.price}</p>

      <AddToCartButton productId={product.id} />
    </div>
  );
}