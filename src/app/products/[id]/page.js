const products = [
  {
    id: "101",
    name: "iPhone 17",
    price: 80000,
  },
  {
    id: "102",
    name: "Samsung Galaxy S26",
    price: 75000,
  },
];

export default async function ProductDetails({ params }) {
  const { id } = await params;

  const product = products.find((item) => item.id === id);

  if (!product) {
    return <h1>Product not found!</h1>;
  }

  return (
    <main>
      <h1>{product.name}</h1>
      <p>Price: ₹{product.price}</p>
      <p>Product ID: {product.id}</p>
    </main>
  );
}