$content = @'
export type FabricCategory =
  | 'ankara' | 'lace' | 'george' | 'chiffon'
  | 'adire' | 'aso-ebi' | 'sequin' | 'embroidered'

export type Occasion = 'wedding' | 'casual' | 'office' | 'party' | 'traditional'
export type OrderStatus = 'pending' | 'paid' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
export type NigerianState = 'Lagos' | 'Abuja' | 'Rivers' | 'Kano' | 'Oyo' | 'Anambra' | 'Delta' | 'Enugu' | 'Edo' | 'Kaduna' | 'Ogun' | 'Imo' | string

export interface CloudinaryImage {
  publicId: string
  url: string
  width: number
  height: number
  alt: string
}

export interface Product {
  id: string
  sanityId: string
  name: string
  slug: string
  price: number
  category: FabricCategory
  description: string
  images: CloudinaryImage[]
  colours: string[]
  stockYards: number
  minYards: number
  occasion: Occasion[]
  isActive: boolean
  isFeatured: boolean
  badge?: 'new' | 'low-stock' | 'pre-order' | 'bestseller'
}

export interface CartItem {
  product: Product
  yards: number
  subtotal: number
}

export interface DeliveryAddress {
  street: string
  city: string
  state: NigerianState
  notes?: string
}

export interface OrderItem {
  productId: string
  productName: string
  yards: number
  unitPrice: number
  subtotal: number
}

export interface Order {
  id: string
  customerId?: string
  customerName: string
  customerEmail: string
  customerPhone: string
  items: OrderItem[]
  deliveryAddress: DeliveryAddress
  deliveryFee: number
  subtotal: number
  total: number
  status: OrderStatus
  paystackReference?: string
  createdAt: string
}

export interface PaystackResponse {
  status: boolean
  message: string
  reference: string
  trxref: string
  transaction: string
}
'@
Set-Content -Path "src\types\index.ts" -Value $content -Encoding utf8