'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Eye, MessageCircle, Truck, ArrowRight } from 'lucide-react';

const steps = [
  { icon: Eye, title: 'See It', description: 'Browse our collections and pick your favorite fabric', color: 'bg-vogue-gold' },
  { icon: MessageCircle, title: 'Message Us', description: 'Tap "Order on WhatsApp" and tell us your choice', color: 'bg-wa-green' },
  { icon: Truck, title: 'Get Delivered', description: 'We deliver nationwide — pay on delivery or transfer', color: 'bg-vogue-dark' },
];

export default function HowToOrder() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-vogue-dark mb-3">How to Order — 3 Simple Steps</h2>
          <div className="w-20 h-1 bg-vogue-gold mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-md mx-auto">From inspiration to your doorstep in minutes</p>
        </div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div key={idx} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} className="text-center group">
                <div className={`${step.color} w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg transform transition-transform group-hover:scale-110 duration-300`}>
                  <Icon className="w-12 h-12 text-white" />
                </div>
                <div className="text-3xl font-heading font-bold text-vogue-gold mb-2">0{idx + 1}</div>
                <h3 className="text-xl font-heading font-semibold mb-2 text-vogue-dark">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
                {idx < 2 && <div className="hidden md:block absolute top-1/3 -right-4 text-vogue-gold"><ArrowRight className="w-6 h-6" /></div>}
              </motion.div>
            );
          })}
        </motion.div>
        <div className="text-center mt-12"><p className="text-sm text-gray-500">⚡ No account needed • Order directly on WhatsApp</p></div>
      </div>
    </section>
  );
}