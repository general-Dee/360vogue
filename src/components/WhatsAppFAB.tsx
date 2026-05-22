'use client';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFAB() {
  const url = 'https://wa.me/234XXXXXXXXXX?text=Hi%20360%20VOGUE';
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg z-50 hover:bg-green-600 transition"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
