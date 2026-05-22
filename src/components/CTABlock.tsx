'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/lib/data';

export default function CTABlock() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi 360 VOGUE, I want to shop your premium fabrics. Please send me your catalog.")}`;
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(https://picsum.photos/id/104/1600/800)", filter: 'brightness(0.3)' }} />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-10" />
      <div className="container relative z-20 px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <Sparkles className="w-12 h-12 text-vogue-gold mx-auto mb-4" />
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">Ready to Turn Heads?</h2>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-8">Get premium fabrics that make you the star of every owambe, wedding, and church service</p>
          <motion.a href={whatsappLink} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-wa-green hover:bg-wa-green-dark text-white font-semibold px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <MessageCircle className="mr-2 w-5 h-5" /> Start Shopping on WhatsApp <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.a>
          <p className="text-white/60 text-sm mt-6">✨ Free delivery on orders over ₦25,000 • Cash on delivery available</p>
        </motion.div>
      </div>
    </section>
  );
}