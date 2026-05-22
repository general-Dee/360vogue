'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WHATSAPP_NUMBER } from '@/lib/data';

export default function Hero() {
  const headline = "Wear the Fabric. Own the Room.";
  const words = headline.split(' ');
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi 360 VOGUE, I want to shop the latest collection. Please show me what fabrics you have.")}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(https://picsum.photos/id/104/1600/900)",
          filter: 'brightness(0.4)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />
      <div className="container relative z-20 px-4 text-center">
        <div className="mb-6 flex flex-wrap justify-center gap-2">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="inline-block text-4xl sm:text-6xl md:text-7xl font-heading font-bold text-white tracking-tight"
            >
              {word}
            </motion.span>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-white/90 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-8 font-body"
        >
          Premium Nigerian fabrics — Ankara, Lace, Aso-Oke, and luxury prints delivered to your doorstep
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-wa-green hover:bg-wa-green-dark text-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Shop on WhatsApp
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-white/50 text-sm mt-6"
        >
          Free delivery on orders over ₦25,000 • Cash on delivery available
        </motion.p>
      </div>
    </section>
  );
}