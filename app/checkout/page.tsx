'use client';

import { useCart } from '@/hooks/useCart';
import { useState } from 'react';

export default function CheckoutPage() {
  const { items, getTotal, clearCart } = useCart();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const total = getTotal();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    // Placeholder checkout: just simulate order placement
    await new Promise((r) => setTimeout(r, 800));
    clearCart();
    alert('Order placed! (Stripe integration can be enabled later)');
    setIsSubmitting(false);
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="font-serif text-4xl mb-6">Checkout</h1>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-ash rounded px-3 py-2 bg-white"
              placeholder="you@example.com"
            />
          </div>
          <div className="border-t pt-4">
            <div className="flex items-center justify-between">
              <span className="text-smoke">Subtotal</span>
              <span>{`$${total.toFixed(2)}`}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-smoke">Shipping</span>
              <span>{total > 100 ? 'Free' : '$15.00'}</span>
            </div>
            <div className="flex items-center justify-between font-bold text-lg mt-2">
              <span>Total</span>
              <span>{`$${(total + (total > 100 ? 0 : 15)).toFixed(2)}`}</span>
            </div>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 rounded-lg bg-earth-dark text-white hover:bg-flame-primary disabled:opacity-60"
          >
            {isSubmitting ? 'Placing Order…' : 'Place Order (Test)'}
          </button>
          <p className="text-xs text-smoke">Secure payments with Stripe will be enabled before launch.</p>
        </form>
      )}
    </div>
  );
}


