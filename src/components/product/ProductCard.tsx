'use client'
import Link from 'next/link'
import { ShoppingBag, Heart } from 'lucide-react'
import { Product } from '@/types'
import { useCartStore } from '@/store/useCartStore'
import { generateWhatsAppOrderURL } from '@/lib/whatsapp'

export default function ProductCard({ product, index }: { product: Product; index: number }) {
  const addToCart = useCartStore((s: { addItem: (product: Product, yards: number) => void }) => s.addItem)
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all animate-fade-in-up" style={{ animationDelay: `${index * 50}ms` }}>
      <Link href={`/product/${product.slug}`}>
        <div className="aspect-square bg-cream overflow-hidden">
          <img src={product.images?.[0]?.url || '/placeholder.jpg'} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
      </Link>
      <div className="p-3">
        <h3 className="font-medium truncate">{product.name}</h3>
        <p className="text-gold font-bold mt-1">₦{product.price.toLocaleString()}/yd</p>
        <div className="flex gap-2 mt-3">
          <button onClick={() => addToCart(product, product.minYards || 2)} className="flex-1 bg-espresso text-white py-2 rounded-md text-sm flex items-center justify-center gap-1"><ShoppingBag size={14} /> Cart</button>
          <a href={generateWhatsAppOrderURL(product.name, 2, product.price * 2)} target="_blank" className="flex-1 bg-green-500 text-white py-2 rounded-md text-sm text-center">WhatsApp</a>
        </div>
      </div>
    </div>
  )
}
