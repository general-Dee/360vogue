'use client'
import { useState } from 'react'
import PaystackPop from '@paystack/inline-js'
import { PAYSTACK_PUBLIC_KEY } from '@/lib/paystack'

export default function PaystackButton({ email, amount, orderId, customerName, deliveryAddress, onSuccess, onClose, children }: any) {
  const [loading, setLoading] = useState(false)
  const handlePayment = () => {
    setLoading(true)
    const paystack = new PaystackPop()
    paystack.newTransaction({
      key: PAYSTACK_PUBLIC_KEY, email, amount: Math.round(amount * 100), currency: 'NGN',
      channels: ['card', 'bank', 'ussd'], ref: `${orderId}_${Date.now()}`,
      metadata: { order_id: orderId, customer_name: customerName, delivery_address: deliveryAddress },
      onSuccess: (res: any) => { setLoading(false); onSuccess(res) },
      onCancel: () => { setLoading(false); onClose() }
    })
  }
  return <button onClick={handlePayment} disabled={loading} className="w-full bg-gold py-3 rounded-lg font-semibold">{loading ? 'Processing...' : children}</button>
}
