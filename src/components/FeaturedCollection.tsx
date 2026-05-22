'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { WHATSAPP_NUMBER } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import ImageWithFallback from '@/components/ImageWithFallback';
import { MessageCircle } from 'lucide-react';

const featuredProducts = [
  { id:1, name:'Ankara Premium Print', price:'₦4,500/yard', yards:'per yard', badge:'Statement', image:'https://picsum.photos/id/189/600/800' },
  { id:2, name:'French Lace', price:'₦38,000', yards:'5 yards set', badge:'Bestseller', image:'https://picsum.photos/id/82/600/800' },
  { id:3, name:'Aso-Oke Set', price:'₦75,000', yards:'3-piece set', badge:'Low stock', image:'https://picsum.photos/id/85/600/800' },
  { id:4, name:'Chiffon Solid', price:'₦3,200/yard', yards:'per yard', badge:'New arrival', image:'https://picsum.photos/id/28/600/800' },
  { id:5, name:'George Wrapper', price:'₦55,000', yards:'Full wrapper', badge:'Trending', image:'https://picsum.photos/id/174/600/800' },
  { id:6, name:'Satin Print', price:'₦4,800/yard', yards:'per yard', badge:'Limited', image:'https://picsum.photos/id/116/600/800' },
];

const getBadgeStyle = (badge) => {
  switch(badge) {
    case 'Bestseller': return 'bg-vogue-gold text-white';
    case 'Low stock': return 'bg-red-600 text-white animate-pulse-slow';
    case 'New arrival': return 'bg-green-600 text-white';
    case 'Trending': return 'bg-purple-600 text-white';
    case 'Limited': return 'bg-orange-600 text-white';
    default: return 'bg-vogue-dark text-vogue-gold';
  }
};

export default function FeaturedCollection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-vogue-dark mb-3">Featured Collection</h2>
          <div className="w-20 h-1 bg-vogue-gold mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-md mx-auto">Curated premium fabrics — each piece tells a story</p>
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredProducts.map((product) => {
            const message = `Hi 360 VOGUE, I want to order ${product.name} (${product.price}) - ${product.yardsInfo}. Do you have it in stock?`;
            const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
            return (
              <motion.div
                key={product.id}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-xl">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <ImageWithFallback src={product.image} alt={product.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width:768px)100vw, 33vw" />
                    <Badge className={`absolute top-4 left-4 z-10 ${getBadgeStyle(product.badge)} px-3 py-1 text-xs font-semibold rounded-full`}>
                      {product.badge}
                    </Badge>
                    {product.badge === 'Low stock' && (
                      <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full text-center">
                        ⚡ Only 2 sets left
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-heading font-bold text-xl mb-2">{product.name}</h3>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-vogue-gold font-bold text-2xl">{product.price}</span>
                      <span className="text-gray-500 text-sm">{product.yards}</span>
                    </div>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-wa-green hover:bg-wa-green-dark text-white gap-2 rounded-full py-2">
                        <MessageCircle className="w-4 h-4" /> Order on WhatsApp
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}