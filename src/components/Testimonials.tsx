'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import ImageWithFallback from '@/components/ImageWithFallback';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  { name:'Adaobi O.', location:'Lagos', fabric:'French Lace', occasion:'Traditional wedding', review:'Everyone kept asking where I got my aso-ebi fabric!', compliments:'Over 20 compliments', image:'https://placehold.co/150x150/1a1a1a/C9A84C?text=Adaobi', rating:5 },
  { name:'Chioma E.', location:'Abuja', fabric:'Aso-Oke Set', occasion:'Church thanksgiving', review:'The set looked royal! My pastor\'s wife asked for their contact.', compliments:'Pastor\'s wife inquired', image:'https://placehold.co/150x150/1a1a1a/C9A84C?text=Chioma', rating:5 },
  { name:'Tolani S.', location:'Port Harcourt', fabric:'Ankara Premium', occasion:'Owambe party', review:'The Ankara is thick and vibrant. Didn\'t fade after washing.', compliments:'Sister of the birthday girl copied my style', image:'https://placehold.co/150x150/1a1a1a/C9A84C?text=Tolani', rating:5 },
];

export default function Testimonials() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section className="py-20 bg-vogue-dark text-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-3">Loved by 1,200+ Nigerian Women</h2>
          <div className="w-20 h-1 bg-vogue-gold mx-auto mb-4"></div>
          <p className="text-white/70 max-w-md mx-auto">Real customers, real fabrics, real compliments</p>
        </div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((t, idx) => (
            <motion.div key={idx} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-vogue-gold/50 mb-4" />
                  <p className="text-white/90 italic mb-4">"{t.review}"</p>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-vogue-gold">
                      <ImageWithFallback src={t.image} alt={t.name} fill className="object-cover" />
                    </div>
                    <div><h4 className="font-heading font-semibold">{t.name}</h4><p className="text-xs text-white/60">{t.location}</p></div>
                  </div>
                  <div className="flex gap-1 mb-2">{[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-vogue-gold text-vogue-gold" />)}</div>
                  <div className="text-sm text-white/80"><span className="font-semibold">Fabric:</span> {t.fabric}<br /><span className="font-semibold">Occasion:</span> {t.occasion}<br /><span className="text-vogue-gold mt-1">💬 {t.compliments}</span></div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}