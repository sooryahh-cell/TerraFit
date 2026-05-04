import React from "react";
import Link from "next/link";
import { Product } from "@/data/products";
import styles from "./ProductCard.module.css";
import Image from "next/image";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className={styles.card}>
      <Link href={`/products/${product.id}`} className={styles.imageLink}>
        <div className={styles.imageContainer}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className={styles.image}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>
      <div className={styles.content}>
        <div className={styles.category}>{product.category}</div>
        <Link href={`/products/${product.id}`} className={styles.titleLink}>
          <h3 className={styles.title}>{product.name}</h3>
        </Link>
        <p className={styles.price}>₹{product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
