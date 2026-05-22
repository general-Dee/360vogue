'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/lib/data';
import { useFBPixel, FBEvents } from '@/hooks/useFBPixel';

export default function StickyMobileCTA() {
  const [show, setShow] = useState(false);
  const { trackEvent } = useFBPixel();
  useEffect(() => { const t = setTimeout(()=>setShow(true),2000); return ()=>clearTimeout(t); }, []);
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20360%20VOGUE%2C%20I%20want%20to%20order`;
  return (
    <AnimatePresence>
      {show && <motion.div initial={{y:100}} animate={{y:0}} exit={{y:100}} className="fixed bottom-4 left-4 right-4 z-50 md:hidden"><a href={waLink} target="_blank" onClick={()=>trackEvent(FBEvents.INITIATE_CHECKOUT,{content_name:'Sticky CTA'})} className="block bg-wa-green rounded-full shadow-lg p-3 text-white text-center font-bold"><MessageCircle className="inline mr-2"/> Order on WhatsApp</a></motion.div>}
    </AnimatePresence>
  );
}