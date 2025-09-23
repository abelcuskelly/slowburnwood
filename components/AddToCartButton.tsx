'use client';

import { useCart } from '@/hooks/useCart';

type Product = {
  id: number;
  slug: string;
  name: string;
  price: number;
  images: string[];
};

export default function AddToCartButton({ product }: { product: Product }) {
  const addItem = useCart((s) => s.addItem);

  return (
    <button
      onClick={() =>
        addItem({ id: product.id, slug: product.slug, name: product.name, price: product.price, image: product.images[0] })
      }
      className="px-6 py-3 rounded-lg bg-earth-dark text-white hover:bg-flame-primary transition-colors"
    >
      Add to Cart
    </button>
  );
}


