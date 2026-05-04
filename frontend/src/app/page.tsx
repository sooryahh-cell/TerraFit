import React from "react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/data/products";
import styles from "./page.module.css";
import Image from "next/image";

export default async function Home() {
  const products = await getProducts();
  const featuredProducts = products.slice(0, 3);

  return (
    <div className={styles.home}>
      {/* Neon Cyber Hero Section */}
      <section className={styles.hero}>
        <div className={styles.meshContainer}>
          <div className={styles.mesh1}></div>
          <div className={styles.mesh2}></div>
          <div className={styles.mesh3}></div>
          <div className={styles.mesh4}></div>
        </div>
        <div className={styles.glassOverlay}></div>

        <div className={styles.heroContentWrapper}>
          <div className={`container ${styles.heroContent}`}>

        {/* Animated neon background orbs */}
        <div className={styles.neonOrb1}></div>
        <div className={styles.neonOrb2}></div>
        <div className={styles.neonOrb3}></div>
        <div className={styles.neonGrid}></div>

          <h1 className={styles.heroTitle}>
            EMBRACE THE <span className={styles.neonText}>GLOW</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Next-generation reactive streetwear and performance gear for the modern urban athlete.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/products?category=Men's" className={styles.neonButton}>
              Shop Men
            </Link>
            <Link href="/products?category=Women's" className={styles.neonButtonOutline}>
              Shop Women
            </Link>
          </div>
        </div>
      </div>
      </section>

      {/* Aesthetic Categories Section */}
      <section className={`container ${styles.section}`}>
        <h2 className={styles.sectionTitle}>SELECT YOUR DIVISION</h2>
        <div className={styles.categoriesGrid}>
          <Link href="/products?category=Men's" className={styles.categoryCard}>
            <Image src="https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop" alt="Mens Division" fill className={styles.categoryImage} />
            <div className={styles.categoryOverlay}>
              <h3 className={styles.categoryTitle}>MEN'S <span className={styles.neonAccent}>DIVISION</span></h3>
            </div>
          </Link>
          <Link href="/products?category=Women's" className={styles.categoryCard}>
            <Image src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop" alt="Womens Division" fill className={styles.categoryImage} />
            <div className={styles.categoryOverlay}>
              <h3 className={styles.categoryTitle}>WOMEN'S <span className={styles.neonAccent}>DIVISION</span></h3>
            </div>
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className={`container ${styles.section}`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>LATEST DROPS</h2>
          <Link href="/products" className={styles.viewAllLink}>
            View All
          </Link>
        </div>
        <div className={styles.productsGrid}>
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
