import { NextResponse } from 'next/server'
import crypto from 'crypto'
import { supabaseAdmin } from '@/lib/supabase'
import { PAYSTACK_WEBHOOK_SECRET } from '@/lib/paystack'
import { sendOrderConfirmationWhatsApp } from '@/lib/whatsapp'

export async function POST(request: Request) {
  try {
    const body = await request.text()
    const signature = request.headers.get('x-paystack-signature')
    const hash = crypto.createHmac('sha512', PAYSTACK_WEBHOOK_SECRET).update(body).digest('hex')
    if (signature !== hash) return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
    const event = JSON.parse(body)
    if (event.event === 'charge.success') {
      const { reference, metadata } = event.data
      const orderId = metadata?.order_id
      if (orderId) {
        await supabaseAdmin.from('orders').update({ status: 'paid' }).eq('paystack_reference', reference)
        const { data: order } = await supabaseAdmin.from('orders').select('*').eq('id', orderId).single()
        if (order) await sendOrderConfirmationWhatsApp(order.customer_phone, order.customer_name, order.id, order.total)
      }
    }
    return NextResponse.json({ received: true })
  } catch (error) {
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 })
  }
}
