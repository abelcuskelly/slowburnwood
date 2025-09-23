import Image from 'next/image';
import { notFound } from 'next/navigation';
import products from '@/content/products.json';
import AddToCartButton from '@/components/AddToCartButton';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return products.products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = products.products.find((p) => p.slug === params.slug);
  if (!product) return { title: 'Product Not Found' };
  return {
    title: `${product.name} | Slowburn Wood Co.`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.images[0]],
      type: 'website'
    }
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.products.find((p) => p.slug === params.slug);

  if (!product) notFound();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-4">
          <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.slice(0, 4).map((image, idx) => (
              <div key={idx} className="aspect-square relative rounded overflow-hidden bg-gray-100">
                <Image src={image} alt="" fill className="object-cover" sizes="150px" />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-serif text-earth-dark">{product.name}</h1>
            <p className="mt-2 text-smoke">{product.category}</p>
          </div>

          <div className="text-3xl font-bold text-earth-dark">
            {`$${(product.salePrice ?? product.price).toFixed(2)}`}
            {product.salePrice && (
              <span className="ml-3 text-xl line-through text-smoke">{`$${product.price.toFixed(2)}`}</span>
            )}
          </div>

          <div className="prose prose-stone">
            <p>{product.description}</p>
          </div>

          {product.includes && (
            <div className="border-t pt-6">
              <h3 className="font-medium mb-3">What's Included:</h3>
              <ul className="space-y-2">
                {product.includes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-flame-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="space-y-4 border-t pt-6">
            {product.inventory > 0 ? (
              <>
                <p className="text-sm text-green-600">✓ In Stock ({product.inventory} available)</p>
                <AddToCartButton product={product as any} />
              </>
            ) : (
              <p className="text-red-600">Out of Stock</p>
            )}
          </div>

          <details className="border-t pt-6">
            <summary className="cursor-pointer font-medium">Sustainability Promise</summary>
            <p className="mt-3 text-smoke">
              All Slowburn wood is sourced from naturally fallen trees in the high desert. We never cut living trees, ensuring our products support forest health while providing you with premium, aged firewood.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
}


