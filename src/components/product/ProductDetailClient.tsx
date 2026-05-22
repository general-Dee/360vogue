'use client'
import { useState } from 'react'
import { Minus, Plus, ShoppingBag, MessageCircle } from 'lucide-react'
import { useCartStore } from '@/store/useCartStore'
import { generateWhatsAppOrderURL } from '@/lib/whatsapp'
import { Product } from '@/types'

export default function ProductDetailClient({ product }: { product: Product }) {
  const [yards, setYards] = useState(product.minYards || 2)
  const addToCart = useCartStore(s => s.addItem)
  const total = product.price * yards
  return (
    <div className="grid md:grid-cols-2 gap-12">
      <div><img src={product.images?.[0]?.url} alt={product.name} className="rounded-2xl w-full" /></div>
      <div><h1 className="text-4xl font-display">{product.name}</h1><p className="text-2xl text-gold mt-2">₦{total.toLocaleString()}</p>
      <div className="mt-6"><label>Yards (min {product.minYards})</label><div className="flex items-center gap-4 mt-2"><button onClick={() => setYards(Math.max(product.minYards, yards - 0.5))}><Minus /></button><span className="text-xl w-16 text-center">{yards}</span><button onClick={() => setYards(yards + 0.5)}><Plus /></button></div></div>
      <div className="flex gap-4 mt-8"><button onClick={() => addToCart(product, yards)} className="flex-1 bg-espresso text-white py-3 rounded-lg"><ShoppingBag className="inline mr-2" /> Add to Cart</button>
      <a href={generateWhatsAppOrderURL(product.name, yards, total)} target="_blank" className="flex-1 bg-green-500 text-white py-3 rounded-lg text-center"><MessageCircle className="inline mr-2" /> WhatsApp Order</a></div></div>
    </div>
  )
}
