'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    // Ensure autoplay policies are satisfied
    v.muted = true;
    v.loop = true;
    // Attempt to play immediately
    const playPromise = v.play();
    if (playPromise && typeof (playPromise as Promise<void>).catch === 'function') {
      (playPromise as Promise<void>).catch(() => {
        // Ignore autoplay rejection; poster will be shown and user can interact
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pb-24 md:pb-40">
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />

      <div className="relative z-10 w-full text-center text-white px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6">Slowburn Wood Co.</h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-6 font-light">Hotter. Cleaner. Wilder.</p>

          <div className="mx-auto max-w-4xl aspect-video rounded-xl overflow-hidden border border-white/20 shadow-2xl mb-8">
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/images/hero-poster.jpg"
              onLoadedData={() => setVideoLoaded(true)}
              onCanPlay={() => setVideoLoaded(true)}
              className="w-full h-full object-cover"
            >
              <source src="/videos/campfire-hero.mp4" type="video/mp4" />
              <source src="/videos/campfire-hero.webm" type="video/webm" />
            </video>
          </div>

          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Premium, naturally-fallen firewood and ritual fire kits for those who host with intention
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="bg-flame-primary hover:bg-flame-accent text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Shop Firecraft
            </Link>
            <Link href="/about" className="border-2 border-white text-white hover:bg-white hover:text-earth-dark px-8 py-3 rounded-lg font-medium transition-colors">
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


