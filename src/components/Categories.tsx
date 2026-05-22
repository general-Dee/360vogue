'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { WHATSAPP_NUMBER } from '@/lib/data';
import { Sparkles, Flower, Crown, Gem, Wind, Droplets } from 'lucide-react';

const categories = [
  { name: 'Ankara', icon: Sparkles, color: 'bg-orange-100 text-orange-600' },
  { name: 'Lace', icon: Flower, color: 'bg-pink-100 text-pink-600' },
  { name: 'Aso-Oke', icon: Crown, color: 'bg-yellow-100 text-yellow-700' },
  { name: 'George', icon: Gem, color: 'bg-purple-100 text-purple-600' },
  { name: 'Chiffon', icon: Wind, color: 'bg-blue-100 text-blue-600' },
  { name: 'Satin', icon: Droplets, color: 'bg-red-100 text-red-600' },
];

export default function Categories() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const handleClick = (cat) => {
    const msg = 'Hi 360 VOGUE, I am interested in your ' + cat + ' collection. Please show me what you have.';
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  };
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-vogue-dark mb-3">Shop by Category</h2>
          <div className="w-20 h-1 bg-vogue-gold mx-auto mb-4"></div>
          <p className="text-gray-600">Find your perfect fabric for every occasion</p>
        </div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
          className="flex flex-wrap justify-center gap-4"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.button
                key={cat.name}
                variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleClick(cat.name)}
                className="group relative overflow-hidden rounded-full px-6 py-3 bg-white shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full ${cat.color} group-hover:scale-110 transition`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-gray-800 group-hover:text-vogue-gold transition-colors">{cat.name}</span>
                </div>
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}