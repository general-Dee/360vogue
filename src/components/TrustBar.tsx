'use client';
import { motion } from 'framer-motion';
import { Truck, Users, MessageCircle, Shield, Clock, Star, Eye } from 'lucide-react';

const trustSignals = [
  { icon: Users, text: '1,200+ happy customers', color: 'text-vogue-gold' },
  { icon: Star, text: '4.8/5 customer rating', color: 'text-yellow-500' },
  { icon: Truck, text: 'Nationwide delivery', color: 'text-white' },
  { icon: MessageCircle, text: 'Order on WhatsApp', color: 'text-wa-green' },
  { icon: Shield, text: 'Quality guaranteed', color: 'text-white' },
  { icon: Clock, text: 'Fast dispatch', color: 'text-white' },
  { icon: Eye, text: '128 live visitors', color: 'text-vogue-gold animate-pulse' },
];

export default function TrustBar() {
  return (
    <div className="bg-vogue-dark border-y border-vogue-gold/20 py-3 overflow-hidden">
      <motion.div
        animate={{ x: [0, -50, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
        className="flex items-center justify-around gap-8 md:justify-center flex-wrap whitespace-nowrap"
      >
        {trustSignals.map((signal, idx) => {
          const Icon = signal.icon;
          return (
            <div key={idx} className="flex items-center gap-2 text-sm font-medium text-white">
              <Icon className={`w-4 h-4 ${signal.color}`} />
              <span>{signal.text}</span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}