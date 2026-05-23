'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Package, MessageCircle, Send, X } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/lib/data';
import { Button } from '@/components/ui/button';

interface OrderTrackingProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OrderTracking({ isOpen, onClose }: OrderTrackingProps) {
  const [orderId, setOrderId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleTrackOrder = () => {
    if (!orderId.trim()) {
      alert('Please enter your order ID');
      return;
    }
    const message = `I want to track my order #${orderId}. My WhatsApp number is ${phoneNumber || 'not provided'}. Please update me on the status.`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative max-w-md w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
      >
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
          <X className="w-5 h-5" />
        </button>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-vogue-gold/10 rounded-full flex items-center justify-center">
              <Package className="w-6 h-6 text-vogue-gold" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-vogue-dark">Track Your Order</h3>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Enter your order ID and WhatsApp number. We'll send you the latest status.
          </p>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Order ID (e.g., 360-12345)"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-vogue-gold"
            />
            <input
              type="tel"
              placeholder="Your WhatsApp number (optional)"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-vogue-gold"
            />
            <Button onClick={handleTrackOrder} className="w-full bg-wa-green hover:bg-wa-green-dark text-white gap-2">
              <MessageCircle className="w-4 h-4" />
              Track on WhatsApp
            </Button>
          </div>
          <p className="text-xs text-gray-400 text-center mt-4">
            You'll be redirected to WhatsApp. Our team will respond shortly.
          </p>
        </div>
      </motion.div>
    </div>
  );
}