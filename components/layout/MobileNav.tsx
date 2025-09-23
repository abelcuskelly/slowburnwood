'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
        <div className="space-y-1.5">
          <span className={`block h-0.5 w-6 bg-earth-dark transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-6 bg-earth-dark transition-all ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-earth-dark transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </div>
      </button>

      <div
        className={`fixed inset-0 bg-bone z-40 transition-transform lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8 text-2xl">
          <Link href="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/products" onClick={() => setIsOpen(false)}>
            Shop
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="/blog" onClick={() => setIsOpen(false)}>
            Blog
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </nav>
      </div>
    </>
  );
}


