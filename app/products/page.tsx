import Image from 'next/image';
import Link from 'next/link';
import products from '@/content/products.json';

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="font-serif text-4xl mb-8">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.products.map((product) => (
          <Link key={product.id} href={`/products/${product.slug}`} className="group">
            <div className="aspect-square relative rounded-lg overflow-hidden bg-ash/40">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mt-3">
              <h3 className="text-xl font-medium">{product.name}</h3>
              <p className="text-sm text-smoke line-clamp-2">{product.description}</p>
              <div className="mt-2 font-bold">
                {`$${(product.salePrice ?? product.price).toFixed(2)}`}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}


