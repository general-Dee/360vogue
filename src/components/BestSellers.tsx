'use client';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WHATSAPP_NUMBER } from '@/lib/data';
import Image from 'next/image';
import { useFBPixel, FBEvents } from '@/hooks/useFBPixel';
import LiveVisitorCounter from '@/components/LiveVisitorCounter';

const placeholderImg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='800' viewBox='0 0 600 800'%3E%3Crect width='600' height='800' fill='%231a1a1a'/%3E%3Ctext x='300' y='400' font-size='24' fill='%23C9A84C' text-anchor='middle' dominant-baseline='middle'%3EBest Seller%3C/text%3E%3C/svg%3E";

const bestSellers = [
  { name:'French Lace', price:'₦38,000', image:placeholderImg, stock:'Only 3 sets left' },
  { name:'Gold Lace Ankara', price:'₦5,200/yard', image:placeholderImg, stock:'15 yards left' },
];

export default function BestSellers() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const { trackEvent } = useFBPixel();
  return (
    <section className="py-20 bg-vogue-dark text-white">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-center mb-3">Best Sellers</h2>
        <div className="w-20 h-1 bg-vogue-gold mx-auto mb-12"></div>
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {bestSellers.map((item,idx) => {
                const msg = `Hi 360 VOGUE, I want to order ${item.name} (${item.price}) - ${item.stock}`;
                const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
                return (
                  <div key={idx} className="flex-[0_0_280px] bg-white rounded-2xl overflow-hidden text-black">
                    <div className="relative aspect-[4/5]"><Image src={item.image} alt={item.name} fill className="object-cover" unoptimized /></div>
                    <div className="p-4">
                      <h3 className="font-bold">{item.name}</h3>
                      <div className="text-vogue-gold font-bold">{item.price}</div>
                      <div className="text-red-600 text-sm mb-2">{item.stock}</div>
                      <LiveVisitorCounter productName={item.name} min={3} max={32} />
                      <a href={waLink} target="_blank" onClick={() => trackEvent(FBEvents.INITIATE_CHECKOUT, { content_name: item.name })}>
                        <Button className="w-full mt-3 bg-wa-green">Order</Button>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <button onClick={()=>emblaApi?.scrollPrev()} className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow"><ChevronLeft/></button>
          <button onClick={()=>emblaApi?.scrollNext()} className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow"><ChevronRight/></button>
        </div>
      </div>
    </section>
  );
}