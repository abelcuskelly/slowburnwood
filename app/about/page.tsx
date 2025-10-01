import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-6">
      <h1 className="font-serif text-4xl">Our Story</h1>
      <p className="text-smoke">
        Slowburn Wood Co. was born from the belief that fire is more than heat—it’s connection, ritual, and
        the heartbeat of unforgettable gatherings. We source only naturally-fallen wood from the high desert,
        never cutting living trees.
      </p>
      <p className="text-smoke">
        Our kits are curated for intentional hosts, blending utility with ceremony. Hotter. Cleaner. Wilder.
      </p>

      <div className="mt-8">
        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-ash/40">
          <Image
            src="/images/about-image.JPG"
            alt="About Slowburn Wood Co."
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>
      </div>
    </div>
  );
}


