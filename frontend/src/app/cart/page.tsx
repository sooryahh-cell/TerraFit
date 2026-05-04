"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import styles from "./page.module.css";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className={`container ${styles.emptyCart}`}>
        <h1 className={styles.title}>YOUR CART IS EMPTY</h1>
        <p className={styles.subtitle}>Looks like you haven't added any gear yet.</p>
        <Link href="/products" className={styles.continueButton}>
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className={`container ${styles.page}`}>
      <h1 className={styles.title}>YOUR CART</h1>

      <div className={styles.cartLayout}>
        <div className={styles.itemsList}>
          {cart.map((item) => (
            <div key={`${item.id}-${item.size}`} className={styles.cartItem}>
              <div className={styles.itemImageWrapper}>
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className={styles.itemImage}
                  sizes="100px"
                />
              </div>

              <div className={styles.itemDetails}>
                <div className={styles.itemHeader}>
                  <Link href={`/products/${item.id}`} className={styles.itemName}>
                    {item.name}
                  </Link>
                  <button
                    onClick={() => removeFromCart(item.id, item.size)}
                    className={styles.removeButton}
                    aria-label="Remove item"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                  </button>
                </div>

                <div className={styles.itemAttributes}>
                  <div className={styles.itemPrice}>₹{item.price.toFixed(2)}</div>
                </div>
                <div className={styles.itemSubtotal}>
                  ₹{(item.price * item.quantity).toFixed(2)}
                </div>

                <div className={styles.quantityControls}>
                  <button
                    onClick={() => updateQuantity(item.id, item.size, Math.max(1, item.quantity - 1))}
                    className={styles.qtyButton}
                  >
                    -
                  </button>
                  <span className={styles.qtyValue}>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                    className={styles.qtyButton}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.summarySection}>
          <div className={styles.summaryCard}>
            <h2 className={styles.summaryTitle}>ORDER SUMMARY</h2>
            
            <div className={styles.summaryRow}>
              <span>Subtotal</span>
              <span>₹{cartTotal.toFixed(2)}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
            
            <div className={styles.summaryTotal}>
              <span>Total</span>
              <span>₹{cartTotal.toFixed(2)}</span>
            </div>

            <Link href="/checkout" className={styles.checkoutButton}>
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
