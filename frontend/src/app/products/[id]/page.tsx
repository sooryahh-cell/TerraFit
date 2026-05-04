import React from "react";
import { notFound } from "next/navigation";
import { getProductById } from "@/data/products";
import ProductClient from "./ProductClient";

export default async function ProductDetailPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const product = await getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container">
      <ProductClient product={product} />
    </div>
  );
}
