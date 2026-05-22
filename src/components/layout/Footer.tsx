import Link from 'next/link'
import { Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-espresso text-white/80 py-12 mt-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div><h3 className="font-display text-xl mb-3">360 Vogue</h3><p className="text-sm">Premium Nigerian fabrics delivered nationwide.</p></div>
        <div><h4 className="font-semibold mb-3">Shop</h4><ul className="space-y-1 text-sm"><li>Ankara</li><li>Lace</li><li>George</li><li>Aso-Ebi</li></ul></div>
        <div><h4 className="font-semibold mb-3">Support</h4><ul className="space-y-1 text-sm"><li>Track Order</li><li>Delivery Info</li><li>Returns</li><li>Contact</li></ul></div>
        <div><h4 className="font-semibold mb-3">Follow Us</h4><div className="flex gap-3"><Instagram size={20} /><Facebook size={20} /><Twitter size={20} /></div></div>
      </div>
      <div className="text-center text-xs mt-8 border-t border-white/10 pt-6">© 2025 360 Vogue. All rights reserved.</div>
    </footer>
  )
}
