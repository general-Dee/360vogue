'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Package, TrendingUp, AlertCircle } from 'lucide-react';

export default function Urgency() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const getNextFriday = () => {
      const now = new Date();
      const nextFriday = new Date(now);
      nextFriday.setDate(now.getDate() + ((5 - now.getDay() + 7) % 7));
      nextFriday.setHours(12, 0, 0, 0);
      if (nextFriday <= now) nextFriday.setDate(nextFriday.getDate() + 7);
      return nextFriday;
    };
    const updateTimer = () => {
      const now = new Date();
      const nextFriday = getNextFriday();
      const diff = nextFriday.getTime() - now.getTime();
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (86400000)) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-vogue-cream to-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 2, repeatType: 'reverse' }} className="inline-flex items-center gap-2 bg-vogue-burgundy text-white px-6 py-2 rounded-full mb-4">
            <Package className="w-4 h-4" /><span className="text-sm font-semibold">NEW STOCK DROPS FRIDAY</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-vogue-dark mb-3">Limited Edition Fabrics</h2>
          <div className="w-20 h-1 bg-vogue-gold mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition"><div className="flex items-center gap-3 mb-4"><AlertCircle className="w-6 h-6 text-vogue-burgundy" /><h3 className="font-heading font-bold text-lg">Selling Fast</h3></div><p className="text-gray-700 mb-2">This Ankara sold out in 48 hours last time</p><div className="text-vogue-burgundy font-bold text-sm animate-pulse-slow">⚡ Only 4 yards remaining of bestseller</div></div>
          <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition text-center"><Clock className="w-8 h-8 text-vogue-gold mx-auto mb-3" /><h3 className="font-heading font-bold text-lg mb-2">Restocking in:</h3><div className="flex justify-center gap-3 text-3xl font-mono font-bold text-vogue-dark"><div><span className="text-vogue-gold">{timeLeft.days}</span><span className="text-xs block">Days</span></div><div><span className="text-vogue-gold">{timeLeft.hours}</span><span className="text-xs block">Hrs</span></div><div><span className="text-vogue-gold">{timeLeft.minutes}</span><span className="text-xs block">Mins</span></div><div><span className="text-vogue-gold">{timeLeft.seconds}</span><span className="text-xs block">Secs</span></div></div><p className="text-sm text-gray-500 mt-2">Next batch arrives Friday 12PM</p></div>
          <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition"><TrendingUp className="w-6 h-6 text-vogue-gold mb-3" /><h3 className="font-heading font-bold text-lg mb-2">Low Stock Alert</h3><ul className="space-y-2 text-sm"><li className="flex items-center gap-2"><span className="w-2 h-2 bg-vogue-burgundy rounded-full"></span> French Lace — 3 sets left</li><li className="flex items-center gap-2"><span className="w-2 h-2 bg-orange-500 rounded-full"></span> Aso-Oke — 2 sets remaining</li><li className="flex items-center gap-2"><span className="w-2 h-2 bg-yellow-500 rounded-full"></span> George Wrapper — 5 pieces left</li></ul><div className="mt-4 text-center text-vogue-gold font-semibold text-sm">Order via WhatsApp to secure yours</div></div>
        </div>
      </div>
    </section>
  );
}