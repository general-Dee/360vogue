'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import WhatsAppChat from './WhatsAppChat'
import { usePathname } from 'next/navigation'

export default function WhatsAppFAB() {
  const [isOpen, setIsOpen] = useState(false)
  const [showPulse, setShowPulse] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    const timer = setTimeout(() => setShowPulse(false), 5000)
    return () => clearTimeout(timer)
  }, [])

  if (pathname === '/checkout') return null

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, scale: 0.8, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.8, y: 20 }} className="absolute bottom-16 right-0 mb-2">
            <WhatsAppChat onClose={() => setIsOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setIsOpen(!isOpen)} className={`relative bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-all ${showPulse ? 'animate-pulse-slow' : ''}`}>
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </div>
  )
}
