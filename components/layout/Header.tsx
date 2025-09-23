'use client';

import Link from 'next/link';
import MobileNav from '@/components/layout/MobileNav';
import { useCart } from '@/hooks/useCart';

export default function Header() {
  const itemCount = useCart((s) => s.getItemCount());

  return (
    <header className="sticky top-0 z-40 bg-bone/80 backdrop-blur border-b border-ash/50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl">Slowburn</Link>
        <nav className="hidden lg:flex items-center gap-6">
          <Link href="/products">Shop</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/cart" className="relative">
            Cart
            <span
              aria-hidden
              suppressHydrationWarning
              className={`ml-1 text-sm bg-earth-dark text-white rounded px-2 py-0.5 ${
                itemCount > 0 ? '' : 'invisible'
              }`}
            >
              {itemCount}
            </span>
          </Link>
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}


