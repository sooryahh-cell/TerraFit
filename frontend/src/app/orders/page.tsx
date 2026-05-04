"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function OrdersPage() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Simple check to make sure they are logged in to view orders
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    }
  }, [router]);

  if (!isClient) return null;

  return (
    <div className={`container ${styles.page}`}>
      <div className={styles.successCard}>
        <div className={styles.iconWrapper}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles.successIcon}
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        <h1 className={styles.title}>Order Confirmed!</h1>
        <p className={styles.message}>
          Thank you for shopping with Terra Fit. Your premium activewear will be processed shortly.
        </p>
        <Link href="/products" className={styles.continueButton}>
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
