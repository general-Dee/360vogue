'use client';
import { useState } from 'react';
import { Package } from 'lucide-react';
import OrderTracking from './OrderTracking';

export default function TrackingButtonWrapper() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-36 right-4 z-40 bg-vogue-gold hover:bg-vogue-gold/90 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2 md:bottom-28"
        aria-label="Track Order"
      >
        <Package className="w-5 h-5" />
        <span className="hidden md:inline text-sm font-semibold">Track Order</span>
      </button>
      <OrderTracking isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}