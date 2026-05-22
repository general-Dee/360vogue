import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Product, CartItem } from '@/types'

interface CartStore {
  items: CartItem[]
  isOpen: boolean
  addItem: (product: Product, yards: number) => void
  removeItem: (productId: string) => void
  updateYards: (productId: string, yards: number) => void
  clearCart: () => void
  openCart: () => void
  closeCart: () => void
  subtotal: () => number
  itemCount: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      addItem: (product, yards) => {
        const existing = get().items.find(i => i.product.id === product.id)
        if (existing) {
          get().updateYards(product.id, existing.yards + yards)
        } else {
          set(state => ({
            items: [...state.items, { product, yards, subtotal: product.price * yards }]
          }))
        }
        get().openCart()
      },
      removeItem: (id) => set(state => ({ items: state.items.filter(i => i.product.id !== id) })),
      updateYards: (id, yards) => set(state => ({
        items: state.items.map(i => i.product.id === id ? { ...i, yards, subtotal: i.product.price * yards } : i)
      })),
      clearCart: () => set({ items: [] }),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      subtotal: () => get().items.reduce((sum, i) => sum + i.subtotal, 0),
      itemCount: () => get().items.reduce((sum, i) => sum + i.yards, 0),
    }),
    { name: '360vogue-cart' }
  )
)
