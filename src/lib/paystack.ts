export const PAYSTACK_PUBLIC_KEY = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY!
export const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY!
export const PAYSTACK_WEBHOOK_SECRET = process.env.PAYSTACK_WEBHOOK_SECRET!

export async function initializePaystackTransaction(params: {
  email: string
  amount: number
  orderId: string
  customerName: string
  deliveryAddress: string
}) {
  const response = await fetch('https://api.paystack.co/transaction/initialize', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: params.email,
      amount: Math.round(params.amount * 100),
      currency: 'NGN',
      channels: ['card', 'bank', 'ussd', 'qr', 'bank_account'],
      metadata: {
        order_id: params.orderId,
        customer_name: params.customerName,
        delivery_address: params.deliveryAddress,
      },
    }),
  })
  const data = await response.json()
  if (!data.status) throw new Error(data.message || 'Payment init failed')
  return {
    authorizationUrl: data.data.authorization_url,
    accessCode: data.data.access_code,
    reference: data.data.reference,
  }
}
