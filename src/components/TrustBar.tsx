'use client';
import { Truck, Users, MessageCircle, Shield } from 'lucide-react';

const trustSignals = [
  { icon: Users, text: '1,200+ happy customers' },
  { icon: Truck, text: 'Nationwide delivery' },
  { icon: MessageCircle, text: 'Order on WhatsApp' },
  { icon: Shield, text: 'Quality guaranteed' },
];

export default function TrustBar() {
  return (
    <div className="bg-vogue-dark text-white py-3 overflow-hidden">
      <div className="flex justify-around items-center gap-8 animate-marquee whitespace-nowrap">
        {[...trustSignals, ...trustSignals].map((signal, idx) => {
          const Icon = signal.icon;
          return (
            <div key={idx} className="flex items-center gap-2 text-sm">
              <Icon className="w-4 h-4 text-vogue-gold" />
              <span>{signal.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}