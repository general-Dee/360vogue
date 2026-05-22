'use client';

import { motion } from 'framer-motion';
import { Home, ShoppingBag, Grid, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/lib/data';

export default function BottomNavBar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent('Hi 360 VOGUE, I want to browse your collection');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  const navItems = [
    { icon: Home, label: 'Home', action: () => scrollToSection('hero') },
    { icon: ShoppingBag, label: 'Shop', action: () => scrollToSection('featured') },
    { icon: Grid, label: 'Categories', action: () => scrollToSection('categories') },
    { icon: MessageCircle, label: 'WhatsApp', action: openWhatsApp, isWhatsApp: true },
  ];

  return (
    <>
      {/* Spacer to prevent content from hiding behind fixed bar */}
      <div className="h-16 md:hidden" />
      
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-lg"
      >
        <div className="flex justify-around items-center py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                onClick={item.action}
                className={`flex flex-col items-center gap-1 px-4 py-1 rounded-full transition-all ${
                  item.isWhatsApp ? 'text-wa-green' : 'text-gray-600 hover:text-vogue-gold'
                }`}
              >
                <Icon className="w-6 h-6" />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </motion.div>
    </>
  );
}