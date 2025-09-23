'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/hooks/useCart';

export default function CartPage() {
  const { items, updateQuantity, removeItem, getTotal, clearCart } = useCart();
  const total = getTotal();

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="font-serif text-4xl mb-6">Your Cart</h1>
      {items.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-smoke mb-6">Your cart is empty.</p>
          <Link href="/products" className="px-6 py-3 rounded-lg bg-earth-dark text-white">Shop Products</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
              <div className="relative w-20 h-20 rounded overflow-hidden bg-ash/40">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
              </div>
              <div className="flex-1">
                <div className="font-medium">{item.name}</div>
                <div className="text-sm text-smoke">{`$${item.price.toFixed(2)}`}</div>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                  className="w-16 border border-ash rounded px-2 py-1"
                />
                <button onClick={() => removeItem(item.id)} className="text-sm text-red-600">Remove</button>
              </div>
            </div>
          ))}

          <div className="flex items-center justify-between border-t pt-6">
            <button onClick={clearCart} className="text-sm text-smoke hover:text-earth-dark">Clear Cart</button>
            <div className="text-2xl font-bold">{`Total: $${total.toFixed(2)}`}</div>
          </div>

          <div>
            <Link href="/checkout" className="px-6 py-3 rounded-lg bg-flame-primary text-white hover:bg-flame-accent inline-block">Proceed to Checkout</Link>
          </div>
        </div>
      )}
    </div>
  );
}


