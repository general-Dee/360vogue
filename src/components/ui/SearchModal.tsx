'use client'
import { useState, useEffect } from 'react'
import Fuse from 'fuse.js'
import { AnimatePresence, motion } from 'framer-motion'
import { X, Search } from 'lucide-react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import { Product } from '@/types'

export default function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('')
  const [products, setProducts] = useState<Product[]>([])
  const [results, setResults] = useState<Product[]>([])

  useEffect(() => {
    if (isOpen) {
      supabase.from('products').select('*').eq('is_active', true).then(({ data }: { data: Product[] | null }) => setProducts(data || []))
    }
  }, [isOpen])

  useEffect(() => {
    if (!products.length) return
    const fuse = new Fuse(products, { keys: ['name', 'description', 'category'], threshold: 0.3 })
    setResults(query ? fuse.search(query).map(r => r.item) : [])
  }, [query, products])

  if (!isOpen) return null
  return (
    <AnimatePresence>
      <motion.div className="fixed inset-0 bg-black/60 z-50 flex items-start justify-center pt-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
        <motion.div className="bg-white w-full max-w-2xl rounded-xl shadow-2xl" initial={{ y: -50 }} animate={{ y: 0 }} exit={{ y: -50 }} onClick={e => e.stopPropagation()}>
          <div className="flex items-center border-b p-3 gap-2">
            <Search size={20} className="text-gray-400" />
            <input type="text" placeholder="Search fabrics..." autoFocus value={query} onChange={e => setQuery(e.target.value)} className="flex-1 outline-none" />
            <button onClick={onClose}><X /></button>
          </div>
          <div className="max-h-96 overflow-auto p-2">
            {results.map(p => (
              <Link key={p.id} href={`/product/${p.slug}`} onClick={onClose} className="block p-3 hover:bg-cream rounded-lg">
                <div className="font-medium">{p.name}</div>
                <div className="text-sm text-gray-500">₦{p.price.toLocaleString()}/yd</div>
              </Link>
            ))}
            {query && results.length === 0 && <div className="p-4 text-center text-gray-500">No fabrics found.</div>}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
