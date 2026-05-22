'use client'
import { useCartStore } from '@/store/useCartStore'
import PaystackButton from '@/components/checkout/PaystackButton'
import { useState } from 'react'

export default function Checkout() {
  const { items, subtotal } = useCartStore()
  const [form, setForm] = useState({ fullName: '', email: '', phone: '', street: '', city: '', state: 'Lagos' })
  const total = subtotal() + 1500
  if (items.length === 0) return <div className="text-center py-20">Cart empty</div>
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-3xl font-display mb-8">Checkout</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4"><input placeholder="Full Name" className="w-full border p-3 rounded" onChange={e => setForm({...form, fullName: e.target.value})} /><input placeholder="Email" onChange={e => setForm({...form, email: e.target.value})} /><input placeholder="Phone" onChange={e => setForm({...form, phone: e.target.value})} /><input placeholder="Street" onChange={e => setForm({...form, street: e.target.value})} /><input placeholder="City" onChange={e => setForm({...form, city: e.target.value})} /><select onChange={e => setForm({...form, state: e.target.value})}><option>Lagos</option><option>Abuja</option></select></div>
        <div className="bg-white p-6 rounded-xl shadow"><h2 className="text-xl font-bold mb-4">Order Summary</h2>{items.map(i => <div key={i.product.id} className="flex justify-between py-2"><span>{i.product.name} x{i.yards}yd</span><span>₦{i.subtotal.toLocaleString()}</span></div>)}<div className="border-t pt-4 mt-4"><div className="flex justify-between font-bold text-lg">Total: ₦{total.toLocaleString()}</div><PaystackButton email={form.email} amount={total} orderId={`ORD_${Date.now()}`} customerName={form.fullName} deliveryAddress={`${form.street}, ${form.city}`} onSuccess={() => alert('Payment successful!')} onClose={() => {}}>Pay Now</PaystackButton></div></div>
      </div>
    </div>
  )
}
