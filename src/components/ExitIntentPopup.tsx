'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/lib/data';
import { useFBPixel, FBEvents } from '@/hooks/useFBPixel';

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const { trackEvent } = useFBPixel();
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !sessionStorage.getItem('exitShown')) {
        sessionStorage.setItem('exitShown','true');
        setIsVisible(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);
  const openWhatsApp = () => {
    trackEvent(FBEvents.INITIATE_CHECKOUT, { content_name: 'Exit Intent Popup' });
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi 360 VOGUE, I need help with my order.')}`, '_blank');
    setIsVisible(false);
  };
  return (
    <AnimatePresence>
      {isVisible && <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70"><motion.div initial={{scale:0.9}} animate={{scale:1}} exit={{scale:0.9}} className="bg-white rounded-2xl p-6 max-w-sm w-full"><button onClick={()=>setIsVisible(false)} className="float-right"><X/></button><MessageCircle className="w-12 h-12 text-wa-green mx-auto my-3"/><h3 className="text-xl font-bold text-center">Need help?</h3><p className="text-center my-4">Chat with us on WhatsApp for fabric advice!</p><button onClick={openWhatsApp} className="w-full bg-wa-green text-white py-2 rounded-full">Chat Now</button></motion.div></div>}
    </AnimatePresence>
  );
}