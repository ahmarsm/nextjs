"use client";

import { useState } from "react";

export default function AddToCartButton({ productId }) {
  const [added, setAdded] = useState(false);

  function handleAddToCart() {
    setAdded(true);
    console.log("Added product:", productId);
  }

  return (
    <button onClick={handleAddToCart}>
      {added ? "Added!" : "Add to Cart"}
    </button>
  );
}