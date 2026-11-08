import { notFound } from "next/navigation";

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

export async function generateMetadata({ params }) {
  const { id } = await params;

  const product = products.find((item) => item.id === id);

  return {
    title: product
      ? `${product.name} | My Store`
      : "Product Not Found",
    description: product
      ? `Explore ${product.name} at My Store.`
      : "The requested product was not found.",
  };
}

export default async function ProductDetails({ params }) {
  const { id } = await params;

  const product = products.find((item) => item.id === id);

  if (!product) {
    notFound();
  }

  return (
    <main>
      <h1>{product.name}</h1>
      <p>Price: ₹{product.price}</p>
      <p>Product ID: {product.id}</p>
    </main>
  );
}