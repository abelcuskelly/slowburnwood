import Image from 'next/image';
import Link from 'next/link';

type Product = {
  id: number;
  slug: string;
  name: string;
  description: string;
  price: number;
  salePrice?: number | null;
  category: string;
  images: string[];
};

export default function FeaturedProducts({ products }: { products: Product[] }) {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-serif text-3xl mb-8">Featured Firecraft</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12 justify-items-center">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.slug}`} className="group block w-full max-w-[320px]">
              <div className="aspect-square relative overflow-hidden rounded-lg bg-ash/40">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="mt-3">
                <h3 className="text-xl font-medium">{product.name}</h3>
                <p className="text-sm text-smoke line-clamp-2">{product.description}</p>
                <div className="mt-2 font-bold">
                  {`$${(product.salePrice ?? product.price).toFixed(2)}`}
                  {product.salePrice && (
                    <span className="ml-2 text-sm text-smoke line-through">{`$${product.price.toFixed(2)}`}</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


