'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/lib/data';
import { useFBPixel, FBEvents } from '@/hooks/useFBPixel';

export default function CTABlock() {
  const { trackEvent } = useFBPixel();
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20360%20VOGUE%2C%20I%20want%20to%20shop`;
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-black/30" style={{backgroundImage:"url('https://placehold.co/1600x800/1a1a1a/C9A84C?text=Luxury+Fabric')"}} />
      <div className="relative container mx-auto text-center">
        <Sparkles className="w-12 h-12 text-vogue-gold mx-auto mb-4" />
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">Ready to Turn Heads?</h2>
        <a href={waLink} target="_blank" onClick={() => trackEvent(FBEvents.INITIATE_CHECKOUT, { content_name: 'Main CTA' })}>
          <Button className="bg-wa-green hover:bg-wa-green-dark text-white px-8 py-6 text-lg rounded-full">Start Shopping on WhatsApp <ArrowRight className="ml-2"/></Button>
        </a>
      </div>
    </section>
  );
}