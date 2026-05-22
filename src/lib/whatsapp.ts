const WHATSAPP_PHONE = process.env.NEXT_PUBLIC_WHATSAPP_PHONE!
const WHATSAPP_TOKEN = process.env.WHATSAPP_TOKEN!
const WHATSAPP_PHONE_ID = process.env.WHATSAPP_PHONE_ID!

export function generateWhatsAppOrderURL(productName: string, yards: number, price: number): string {
  const message = encodeURIComponent(
    `Hello 360 Vogue! 👋\n\nI'd like to order:\n🧵 *${productName}*\n📏 Yards: ${yards}\n💰 Price: ₦${price.toLocaleString()}\n\nPlease confirm availability.`
  )
  return `https://wa.me/${WHATSAPP_PHONE}?text=${message}`
}

export function generateWhatsAppGeneralEnquiryURL(): string {
  const message = encodeURIComponent(`Hello 360 Vogue! 👋 I'm interested in your fabrics.`)
  return `https://wa.me/${WHATSAPP_PHONE}?text=${message}`
}

export function generateWhatsAppGroupOrderURL(collection: string): string {
  const message = encodeURIComponent(
    `Hello 360 Vogue! 👋\n\nWe're interested in a group/Aso-Ebi order for: *${collection}*\n\nPlease share bulk pricing.`
  )
  return `https://wa.me/${WHATSAPP_PHONE}?text=${message}`
}

export async function sendOrderConfirmationWhatsApp(
  customerPhone: string,
  customerName: string,
  orderId: string,
  totalAmount: number
): Promise<void> {
  if (!WHATSAPP_TOKEN || !WHATSAPP_PHONE_ID) return
  const formattedPhone = customerPhone.replace(/^0/, '234').replace(/^\+/, '')
  await fetch(`https://graph.facebook.com/v18.0/${WHATSAPP_PHONE_ID}/messages`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${WHATSAPP_TOKEN}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      messaging_product: 'whatsapp',
      to: formattedPhone,
      type: 'template',
      template: {
        name: 'order_confirmation',
        language: { code: 'en' },
        components: [{
          type: 'body',
          parameters: [
            { type: 'text', text: customerName },
            { type: 'text', text: orderId },
            { type: 'text', text: `₦${totalAmount.toLocaleString()}` },
          ],
        }],
      },
    }),
  })
}
