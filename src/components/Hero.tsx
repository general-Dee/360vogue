'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Truck, Shield, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/siteConfig';

export default function Hero() {
  const headline = "Wear the Fabric. Own the Room.";
  const words = headline.split(' ');
  const whatsappLink = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent('Hi 360 VOGUE, I want to shop the latest collection.')}`;

  const trustBadges = [
    { icon: Users, text: '1,200+ Happy Customers', color: 'text-vogue-gold' },
    { icon: Truck, text: 'Nationwide Delivery', color: 'text-white' },
    { icon: Shield, text: 'Quality Guaranteed', color: 'text-white' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${siteConfig.heroImage.url}')`,
          filter: 'brightness(0.35)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />
      
      <div className="container relative z-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center gap-6 mb-6 flex-wrap"
        >
          {trustBadges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
              >
                <Icon className={`w-4 h-4 ${badge.color}`} />
                <span className="text-white text-sm font-medium">{badge.text}</span>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mb-6 flex flex-wrap justify-center gap-2">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="inline-block text-4xl sm:text-6xl md:text-7xl font-heading font-bold text-white tracking-tight hero-text-shadow"
            >
              {word}
            </motion.span>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-white/90 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-8 font-body hero-text-shadow"
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-6 flex flex-wrap justify-center gap-4 text-white/70 text-sm hero-text-shadow"
        >
          <div className="flex items-center gap-1"><Star className="w-4 h-4 fill-vogue-gold text-vogue-gold" /> Rated 4.8/5 from 1,200+ reviews</div>
          <div>•</div>
          <div>Free delivery over ₦25,000</div>
          <div>•</div>
          <div>Cash on delivery available</div>
        </motion.div>
      </div>
    </section>
  );
}