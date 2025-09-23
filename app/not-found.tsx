import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-4 py-24 text-center">
      <h1 className="font-serif text-5xl mb-4">Lost in the Woods</h1>
      <p className="text-smoke mb-8">The page you’re looking for doesn’t exist.</p>
      <Link href="/" className="px-6 py-3 rounded-lg bg-earth-dark text-white">Back to Home</Link>
    </div>
  );
}


