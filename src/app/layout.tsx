import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MetaPixel from '@/components/MetaPixel';
import StructuredData from '@/components/StructuredData';
import ExitIntentPopup from '@/components/ExitIntentPopup';
import WhatsAppFAB from '@/components/WhatsAppFAB';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair-display',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: '360 VOGUE | Premium Nigerian Fabrics',
  description: 'Shop Ankara, Lace, Aso-Oke, and more. Order on WhatsApp.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className={inter.className}>
        <MetaPixel />
        <StructuredData />
        <ExitIntentPopup />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}