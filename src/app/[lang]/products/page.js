import ProductCard from "@/app/components/ProductCard";

export default async function ProductsPage() {

  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch("http://localhost:3000/api/products");

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const products = await response.json();

  return (
    <main>
      <h1>Our Products</h1>

      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </main>
  );
}