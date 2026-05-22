import { supabase } from '@/lib/supabase'
import ProductCard from '@/components/product/ProductCard'
import Link from 'next/link'
import { generateWhatsAppGeneralEnquiryURL } from '@/lib/whatsapp'

export default async function Home() {
  const { data: products } = await supabase.from('products').select('*').eq('is_featured', true).limit(8)
  return (
    <>
      <section className="min-h-[80vh] flex items-center justify-center bg-cream text-center">
        <div><h1 className="font-display text-5xl md:text-7xl mb-4">Dress the Nation.</h1><p className="text-xl mb-8">One yard at a time.</p>
        <Link href="/shop" className="bg-gold px-8 py-3 rounded-lg mr-4">Shop Now</Link>
        <a href={generateWhatsAppGeneralEnquiryURL()} target="_blank" className="bg-espresso text-white px-8 py-3 rounded-lg">Chat on WhatsApp</a></div>
      </section>
      <section className="py-16 container mx-auto px-4"><h2 className="text-3xl font-display text-center mb-12">Featured Fabrics</h2><div className="grid grid-cols-2 md:grid-cols-4 gap-6">{products?.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}</div></section>
    </>
  )
}
