'use client';
import { useRef, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, MessageCircle, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WHATSAPP_NUMBER } from '@/lib/data';
import ImageWithFallback from '@/components/ImageWithFallback';

const bestSellers = [
  { name:'French Lace', price:'₦38,000', image:'https://picsum.photos/id/82/600/800', stock:'Only 3 sets left' },
  { name:'Gold Lace Ankara', price:'₦5,200/yard', image:'https://picsum.photos/id/183/600/800', stock:'Selling fast - 15 yards left' },
  { name:'Premium Lace', price:'₦45,000', image:'https://picsum.photos/id/177/600/800', stock:'Only 4 sets left' },
  { name:'Aso-Oke Special', price:'₦65,000', image:'https://picsum.photos/id/112/600/800', stock:'Trending - 5 sets left' },
];

export default function BestSellers() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', slidesToScroll: 1 });
  const prevBtn = useRef(null);
  const nextBtn = useRef(null);

  useEffect(() => {
    if (!emblaApi) return;
    const prev = prevBtn.current;
    const next = nextBtn.current;
    if (prev) prev.addEventListener('click', () => emblaApi.scrollPrev());
    if (next) next.addEventListener('click', () => emblaApi.scrollNext());
    return () => {
      if (prev) prev.removeEventListener('click', () => emblaApi.scrollPrev());
      if (next) next.removeEventListener('click', () => emblaApi.scrollNext());
    };
  }, [emblaApi]);

  return (
    <section className="py-20 bg-vogue-dark text-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-vogue-gold/20 text-vogue-gold px-4 py-2 rounded-full mb-4">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-semibold">BESTSELLERS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-3">Most Loved Fabrics</h2>
          <div className="w-20 h-1 bg-vogue-gold mx-auto"></div>
        </div>
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {bestSellers.map((item, idx) => {
                const message = `Hi 360 VOGUE, I want to order ${item.name} (${item.price}). ${item.stock}`;
                const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
                return (
                  <div key={idx} className="flex-[0_0_280px] sm:flex-[0_0_320px] group">
                    <div className="bg-white rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                      <div className="relative aspect-[4/5] overflow-hidden">
                        <ImageWithFallback src={item.image} alt={item.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute top-3 right-3 bg-vogue-gold text-vogue-dark text-xs font-bold px-2 py-1 rounded-full">🔥 HOT</div>
                      </div>
                      <div className="p-5 text-vogue-dark">
                        <h3 className="font-heading font-bold text-xl mb-2">{item.name}</h3>
                        <div className="text-vogue-gold font-bold text-2xl mb-2">{item.price}</div>
                        <div className="text-red-600 text-sm mb-4 animate-pulse-slow">{item.stock}</div>
                        <a href={waLink} target="_blank">
                          <Button className="w-full bg-wa-green hover:bg-wa-green-dark text-white rounded-full gap-2">
                            <MessageCircle className="w-4 h-4" /> Order on WhatsApp
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <button ref={prevBtn} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:translate-x-0 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-all z-10">
            <ChevronLeft className="w-5 h-5 text-vogue-dark" />
          </button>
          <button ref={nextBtn} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-0 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-all z-10">
            <ChevronRight className="w-5 h-5 text-vogue-dark" />
          </button>
        </div>
      </div>
    </section>
  );
}