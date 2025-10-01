import type { Metadata } from 'next';
import './globals.css';
import { Inter, Playfair_Display, Amatic_SC } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });
const amatic = Amatic_SC({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-accent' });

export const metadata: Metadata = {
  title: {
    default: 'Slowburn Wood Co. - Premium Naturally-Fallen Firewood',
    template: '%s | Slowburn Wood Co.'
  },
  description:
    'Premium, naturally-fallen firewood and ritual fire kits. Hotter. Cleaner. Wilder.',
  robots: { index: true, follow: true },
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL || 'https://slowburnwood.vercel.app'),
  openGraph: {
    type: 'website',
    siteName: 'Slowburn Wood Co.',
    images: [
      {
        url: 'https://slowburnwood.vercel.app/images/about-page.png',
        width: 1200,
        height: 630
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://slowburnwood.vercel.app/images/about-page.png']
  },
  icons: {
    icon: '/images/favicon.png',
    shortcut: '/images/favicon.png',
    apple: '/images/favicon.png'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${amatic.variable}`}>
      <body className="min-h-screen bg-bone text-earth-dark antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}


