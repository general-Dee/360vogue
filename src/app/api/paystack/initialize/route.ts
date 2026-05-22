import { NextResponse } from 'next/server'
import { initializePaystackTransaction } from '@/lib/paystack'
import { supabaseAdmin } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, amount, orderId, customerName, deliveryAddress } = body
    if (!email || !amount || !orderId) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }
    const { error: orderError } = await supabaseAdmin.from('orders').insert({
      id: orderId, customer_email: email, customer_name: customerName, delivery_address: deliveryAddress, total: amount, status: 'pending',
    })
    if (orderError) return NextResponse.json({ error: 'Failed to create order' }, { status: 500 })
    const { authorizationUrl, accessCode, reference } = await initializePaystackTransaction({ email, amount, orderId, customerName, deliveryAddress })
    await supabaseAdmin.from('orders').update({ paystack_reference: reference }).eq('id', orderId)
    return NextResponse.json({ authorizationUrl, accessCode, reference })
  } catch (error) {
    return NextResponse.json({ error: 'Payment initialization failed' }, { status: 500 })
  }
}
