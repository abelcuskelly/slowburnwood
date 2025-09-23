import Hero from '@/components/sections/Hero';
import FeaturedProducts from '@/components/sections/FeaturedProducts';
import ValueProps from '@/components/sections/ValueProps';
import Newsletter from '@/components/sections/Newsletter';
import products from '@/content/products.json';

export default function HomePage() {
  const featuredProducts = products.products.filter((p) => p.featured);

  return (
    <main>
      <Hero />
      <ValueProps />
      <FeaturedProducts products={featuredProducts} />
      <Newsletter />
    </main>
  );
}


