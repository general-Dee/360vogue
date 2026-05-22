import { NextResponse } from 'next/server'
import { sendOrderConfirmationWhatsApp } from '@/lib/whatsapp'
import { supabaseAdmin } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { orderId, customerPhone, customerName, totalAmount } = body
    if (!orderId || !customerPhone || !customerName) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }
    const { data: order } = await supabaseAdmin.from('orders').select('whatsapp_notified').eq('id', orderId).single()
    if (order?.whatsapp_notified) return NextResponse.json({ message: 'Already notified' })
    await sendOrderConfirmationWhatsApp(customerPhone, customerName, orderId, totalAmount)
    await supabaseAdmin.from('orders').update({ whatsapp_notified: true }).eq('id', orderId)
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send notification' }, { status: 500 })
  }
}
