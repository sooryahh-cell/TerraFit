"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import styles from "./product.module.css";
import Link from "next/link";

export default function ProductClient({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes ? product.sizes[0] : "");
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    if (product.sizes && !selectedSize) return;

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
      size: selectedSize || undefined,
    });

    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className={styles.productLayout}>
      {/* 
        Image Layout Fix 
        Adjusting to fit properly within the container, maintain correct aspect ratio, 
        and ensure it looks clean and responsive on mobile screens. 
      */}
      <div className={styles.imageSection}>
        <div className={styles.imageWrapper}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className={styles.productImage}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>

      <div className={styles.infoSection}>
        <div className={styles.category}>{product.category}</div>
        <h1 className={styles.title}>{product.name}</h1>
        <p className={styles.price}>₹{product.price.toFixed(2)}</p>

        <p className={styles.description}>{product.description}</p>

        {product.sizes && product.sizes.length > 0 && (
          <div className={styles.sizeSection}>
            <h3 className={styles.sizeLabel}>Select Size</h3>
            <div className={styles.sizeGrid}>
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`${styles.sizeButton} ${selectedSize === size ? styles.sizeSelected : ""}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        <button
          className={`${styles.addToCartButton} ${added ? styles.added : ""}`}
          onClick={handleAddToCart}
          disabled={!!(product.sizes && !selectedSize)}
        >
          {added ? "Added to Cart" : "Add to Cart"}
        </button>

        <Link href="/cart" className={styles.viewCartLink}>
          View Cart
        </Link>
      </div>
    </div>
  );
}
