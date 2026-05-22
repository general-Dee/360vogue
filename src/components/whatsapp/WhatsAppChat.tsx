'use client'
import { motion } from 'framer-motion'
import { Bot, Send, Clock, Sparkles } from 'lucide-react'
import { generateWhatsAppGeneralEnquiryURL, generateWhatsAppGroupOrderURL } from '@/lib/whatsapp'

export default function WhatsAppChat({ onClose }: { onClose: () => void }) {
  const quickReplies = [
    { label: 'Browse new arrivals', action: generateWhatsAppGeneralEnquiryURL },
    { label: 'Check order status', action: generateWhatsAppGeneralEnquiryURL },
    { label: 'Aso-Ebi / bulk pricing', action: () => generateWhatsAppGroupOrderURL('Aso-Ebi') },
    { label: 'Custom order enquiry', action: generateWhatsAppGeneralEnquiryURL },
  ]

  const handleQuickReply = (url: string) => {
    window.open(url, '_blank')
    onClose()
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.9 }} className="w-80 bg-white rounded-2xl shadow-2xl overflow-hidden">
      <div className="bg-green-500 p-4 text-white flex justify-between items-center">
        <div className="flex items-center gap-2"><Bot size={20} /><span className="font-bold">360 Vogue Support</span></div>
        <button onClick={onClose}>✕</button>
      </div>
      <div className="p-4 space-y-3">
        {quickReplies.map((reply, i) => (
          <button key={i} onClick={() => handleQuickReply(reply.action())} className="w-full text-left px-4 py-2 rounded-full border border-gray-200 hover:border-gold hover:bg-cream transition flex justify-between items-center">
            {reply.label} <Send size={14} />
          </button>
        ))}
      </div>
    </motion.div>
  )
}
