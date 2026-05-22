'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/lib/data';

export default function StickyMobileCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => { const timer = setTimeout(() => setShow(true), 2000); return () => clearTimeout(timer); }, []);
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi 360 VOGUE, I want to place an order. Please help me.")}`;
  return (
    <AnimatePresence>
      {show && (
        <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }} transition={{ type: 'spring', stiffness: 300, damping: 30 }} className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block">
            <div className="bg-wa-green rounded-full shadow-2xl flex items-center justify-between px-5 py-3 shadow-glow">
              <div className="flex items-center gap-3"><MessageCircle className="w-6 h-6 text-white" /><span className="text-white font-semibold text-base">Order on WhatsApp</span></div>
              <div className="bg-white/20 rounded-full px-3 py-1"><span className="text-white text-xs font-medium">⚡ Chat to buy</span></div>
            </div>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}