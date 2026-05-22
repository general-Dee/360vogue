'use client';
import { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';

interface LiveVisitorCounterProps {
  productName?: string;
  min?: number;
  max?: number;
  className?: string;
}

export default function LiveVisitorCounter({ 
  productName, 
  min = 8, 
  max = 47,
  className = '' 
}: LiveVisitorCounterProps) {
  const [count, setCount] = useState<number>(() => {
    // Generate deterministic random number based on product name (if provided)
    if (productName) {
      const hash = productName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
      return min + (hash % (max - min + 1));
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
  });

  useEffect(() => {
    // Update the counter every 15-30 seconds to simulate real activity
    const interval = setInterval(() => {
      // Small random change (-3 to +5) but keep within bounds
      setCount(prev => {
        let newCount = prev + (Math.floor(Math.random() * 9) - 3);
        newCount = Math.max(min, Math.min(max, newCount));
        return newCount;
      });
    }, 15000 + Math.random() * 15000);

    return () => clearInterval(interval);
  }, [min, max]);

  return (
    <div className={`flex items-center gap-1.5 text-xs ${className}`}>
      <Eye className="w-3.5 h-3.5 text-vogue-gold animate-pulse" />
      <span className="font-semibold text-gray-700">{count}</span>
      <span className="text-gray-500">people viewing this</span>
    </div>
  );
}