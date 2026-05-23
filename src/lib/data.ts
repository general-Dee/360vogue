export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '234XXXXXXXXXX';

export const getWhatsAppMessage = (productName: string) => {
  return `Hi 360 VOGUE, I want to order ${productName}`;
};