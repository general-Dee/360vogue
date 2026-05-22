'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { X, Minus, Plus, Trash2 } from 'lucide-react'
import Link from 'next/link'
import { useCartStore } from '@/store/useCartStore'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateYards, subtotal, itemCount } = useCartStore()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div className="fixed inset-0 bg-black/50 z-50" onClick={closeCart} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
          <motion.div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-xl z-50 flex flex-col" initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 20 }}>
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold">Your Cart ({itemCount()} items)</h2>
              <button onClick={closeCart}><X /></button>
            </div>
            <div className="flex-1 overflow-auto p-4 space-y-4">
              {items.map((item: { product: any; yards: number; subtotal: number }) => (
                <div key={item.product.id} className="flex gap-3 border-b pb-3">
                  <div className="w-20 h-20 bg-gray-100 rounded" />
                  <div className="flex-1">
                    <h3 className="font-medium">{item.product.name}</h3>
                    <p className="text-sm text-gold">₦{item.subtotal.toLocaleString()}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button onClick={() => updateYards(item.product.id, Math.max(0.5, item.yards - 0.5))}><Minus size={14} /></button>
                      <span>{item.yards} yds</span>
                      <button onClick={() => updateYards(item.product.id, item.yards + 0.5)}><Plus size={14} /></button>
                      <button onClick={() => removeItem(item.product.id)} className="ml-4 text-red-500"><Trash2 size={14} /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t p-4 space-y-3">
              <div className="flex justify-between font-bold text-lg">Subtotal: ₦{subtotal().toLocaleString()}</div>
              <Link href="/checkout" onClick={closeCart} className="block w-full bg-gold text-center py-3 rounded-lg font-semibold">Proceed to Checkout</Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
