import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.brand}>
          <h2 className={styles.logo}>TERRA FIT</h2>
          <p className={styles.tagline}>Premium activewear for the modern athlete.</p>
        </div>
        <div className={styles.links}>
          <div className={styles.linkGroup}>
            <h3>Shop</h3>
            <Link href="/products?category=Shoes">Shoes</Link>
            <Link href="/products?category=Apparel">Apparel</Link>
            <Link href="/products?category=Watches">Watches</Link>
          </div>
          <div className={styles.linkGroup}>
            <h3>Support</h3>
            <Link href="#">FAQ</Link>
            <Link href="#">Shipping</Link>
            <Link href="#">Returns</Link>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Terra Fit. All rights reserved.</p>
      </div>
    </footer>
  );
}
