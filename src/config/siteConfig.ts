// Central site configuration – change these values to customize your site
export const siteConfig = {
  name: '360 VOGUE',
  description: 'Premium Nigerian fabrics — Ankara, Lace, Aso-Oke, George, Chiffon, Satin',
  heroImage: {
    // Replace with your actual fabric image URL (lace, Ankara, etc.)
    // Suggested: upload your own high-res image to a CDN (Cloudinary, Imgix) or use the placeholder below
    url: 'https://images.pexels.com/photos/29355317/pexels-photo-29355317/free-photo-of-colorful-african-fabric-pattern-in-close-up.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop',
    alt: 'Premium lace fabric close-up',
  },
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '234XXXXXXXXXX',
};