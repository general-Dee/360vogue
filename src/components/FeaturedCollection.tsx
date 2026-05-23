'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { WHATSAPP_NUMBER } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { MessageCircle } from 'lucide-react';
import { useFBPixel, FBEvents } from '@/hooks/useFBPixel';
import LiveVisitorCounter from '@/components/LiveVisitorCounter';

const placeholderImg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='800' viewBox='0 0 600 800'%3E%3Crect width='600' height='800' fill='%231a1a1a'/%3E%3Ctext x='300' y='400' font-size='24' fill='%23C9A84C' text-anchor='middle' dominant-baseline='middle'%3EFabric%3C/text%3E%3C/svg%3E";

const featuredProducts = [
  { id:1, name:'Ankara Premium Print', price:'₦4,500/yard', yards:'per yard', badge:'Statement', image:placeholderImg },
  { id:2, name:'French Lace', price:'₦38,000', yards:'5 yards set', badge:'Bestseller', image:placeholderImg },
  { id:3, name:'Aso-Oke Set', price:'₦75,000', yards:'3-piece set', badge:'Low stock', image:placeholderImg },
  { id:4, name:'Chiffon Solid', price:'₦3,200/yard', yards:'per yard', badge:'New arrival', image:placeholderImg },
  { id:5, name:'George Wrapper', price:'₦55,000', yards:'Full wrapper', badge:'Trending', image:placeholderImg },
  { id:6, name:'Satin Print', price:'₦4,800/yard', yards:'per yard', badge:'Limited', image:placeholderImg },
  { id:7, name:'Velvet Ankara', price:'₦6,500/yard', yards:'per yard', badge:'Premium', image:placeholderImg },
  { id:8, name:'Sequined Lace', price:'₦55,000', yards:'5 yards set', badge:'Limited', image:placeholderImg },
  { id:9, name:'Broken George', price:'₦65,000', yards:'Full wrapper', badge:'Trending', image:placeholderImg },
];

export default function FeaturedCollection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { trackEvent } = useFBPixel();

  useEffect(() => {
    if (inView) {
      featuredProducts.slice(0,3).forEach((p, i) => {
        setTimeout(() => trackEvent(FBEvents.VIEW_CONTENT, { content_name: p.name }), i * 500);
      });
    }
  }, [inView, trackEvent]);

  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-center mb-3">Featured Collection</h2>
        <div className="w-20 h-1 bg-vogue-gold mx-auto mb-12"></div>
        <motion.div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => {
            const msg = `Hi 360 VOGUE, I want to order ${product.name} (${product.price}) - ${product.yards}`;
            const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
            return (
              <Card key={product.id} className="group overflow-hidden border-2 border-gray-100 bg-white rounded-2xl shadow-sm hover:shadow-xl hover:border-vogue-gold transition-all duration-300">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition" unoptimized />
                  <Badge className="absolute top-4 left-4 bg-vogue-gold text-white">{product.badge}</Badge>
                </div>
                <CardContent className="p-5">
                  <h3 className="font-heading font-bold text-xl">{product.name}</h3>
                  <div className="flex justify-between items-center my-3">
                    <span className="text-vogue-gold font-bold text-2xl">{product.price}</span>
                    <span className="text-gray-500 text-sm">{product.yards}</span>
                  </div>
                  <div className="mb-3"><LiveVisitorCounter productName={product.name} min={5} max={38} /></div>
                  <a href={waLink} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent(FBEvents.INITIATE_CHECKOUT, { content_name: product.name })}>
                    <Button className="w-full bg-wa-green hover:bg-wa-green-dark text-white gap-2 rounded-full">
                      <MessageCircle className="w-4 h-4" /> Order on WhatsApp
                    </Button>
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}