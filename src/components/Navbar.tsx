'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/lib/data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20360%20VOGUE`;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-3 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <motion.h1
          whileHover={{ scale: 1.02 }}
          className="text-2xl font-heading font-bold tracking-tight"
        >
          360<span className="text-vogue-gold">VOGUE</span>
        </motion.h1>
        <div className="flex items-center gap-4">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-wa-green hover:text-wa-green-dark transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
          <ShoppingBag className="w-5 h-5 text-vogue-dark" />
        </div>
      </div>
    </motion.nav>
  );
}