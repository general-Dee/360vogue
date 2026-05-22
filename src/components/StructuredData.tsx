'use client';

import { WHATSAPP_NUMBER } from '@/lib/data';

export default function StructuredData() {
  const websiteUrl = 'https://360vogue.ng';
  const whatsappNumber = `+${WHATSAPP_NUMBER}`;
  
  // LocalBusiness schema
  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: '360 VOGUE',
    description: 'Premium Nigerian fabrics — Ankara, Lace, Aso-Oke, George, Chiffon, Satin. Nationwide delivery. Order via WhatsApp.',
    url: websiteUrl,
    logo: `${websiteUrl}/logo.png`,
    image: 'https://images.pexels.com/photos/29355317/pexels-photo-29355317/free-photo-of-colorful-african-fabric-pattern-in-close-up.jpeg',
    priceRange: '₦₦',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lagos',
      addressCountry: 'NG',
    },
    telephone: whatsappNumber,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: whatsappNumber,
      contactType: 'customer service',
      availableLanguage: ['English'],
    },
    sameAs: [
      'https://www.instagram.com/360vogue',
      'https://www.facebook.com/360vogue',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '1250',
      bestRating: '5',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
  };

  // Product schema for a representative bestseller
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Premium French Lace',
    description: 'Exquisite French lace fabric perfect for weddings and special occasions. 5 yards set.',
    image: 'https://images.pexels.com/photos/29355317/pexels-photo-29355317/free-photo-of-colorful-african-fabric-pattern-in-close-up.jpeg',
    brand: {
      '@type': 'Brand',
      name: '360 VOGUE',
    },
    offers: {
      '@type': 'Offer',
      price: '38000',
      priceCurrency: 'NGN',
      availability: 'https://schema.org/InStock',
      url: `${websiteUrl}/product/french-lace`,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '342',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </>
  );
}