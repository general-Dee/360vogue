'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ShoppingBag, Heart, Search } from 'lucide-react'
import { useCartStore } from '@/store/useCartStore'
import CartDrawer from '@/components/cart/CartDrawer'
import SearchModal from '@/components/ui/SearchModal'
import { generateWhatsAppGeneralEnquiryURL } from '@/lib/whatsapp'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const itemCount = useCartStore((s: { itemCount: () => number }) => s.itemCount())
  const openCart = useCartStore((s: { openCart: () => void }) => s.openCart)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all ${isScrolled ? 'bg-cream shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="font-display text-2xl md:text-3xl font-bold text-espresso">360 Vogue</Link>
          <div className="hidden md:flex gap-8">
            {['Shop', 'Lookbook', 'Blog', 'Track Order'].map((item) => (
              <Link key={item} href={`/${item.toLowerCase().replace(' ', '')}`} className="hover:text-gold">{item}</Link>
            ))}
          </div>
          <div className="flex gap-4 items-center">
            <button onClick={() => setSearchOpen(true)}><Search size={20} /></button>
            <Link href="/account/wishlist"><Heart size={20} /></Link>
            <a href={generateWhatsAppGeneralEnquiryURL()} target="_blank" className="hidden md:block">📱</a>
            <button onClick={openCart} className="relative">
              <ShoppingBag size={20} />
              {itemCount > 0 && <span className="absolute -top-2 -right-2 bg-gold text-espresso rounded-full w-5 h-5 text-xs">{itemCount}</span>}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && <div className="md:hidden bg-cream p-4 flex flex-col gap-2">
          {['Shop', 'Lookbook', 'Blog', 'Track Order'].map((item) => (
            <Link key={item} href={`/${item.toLowerCase().replace(' ', '')}`} onClick={() => setMobileMenuOpen(false)}>{item}</Link>
          ))}
        </div>}
      </nav>
      <CartDrawer />
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
