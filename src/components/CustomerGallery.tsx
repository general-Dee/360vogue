'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, X, ZoomIn } from 'lucide-react';
import Image from 'next/image';
import { WHATSAPP_NUMBER } from '@/lib/data';

interface CustomerPhoto {
  id: string;
  name: string;
  location: string;
  fabric: string;
  occasion: string;
  imageUrl: string;
  whatsappMessage: string;
  likes?: number;
}

// Sample customer photos – Replace with your actual UGC images
const customerPhotos: CustomerPhoto[] = [
  {
    id: '1',
    name: 'Adaobi',
    location: 'Lagos',
    fabric: 'Ankara Premium Print',
    occasion: 'Traditional Wedding (Aso-Ebi)',
    imageUrl: 'https://placehold.co/600x800/1a1a1a/C9A84C?text=Adaobi+Ankara',
    whatsappMessage: 'Hi 360 VOGUE, I love the Ankara Adaobi wore. I want to order the same fabric!',
  },
  {
    id: '2',
    name: 'Chioma',
    location: 'Abuja',
    fabric: 'French Lace',
    occasion: 'Church Thanksgiving',
    imageUrl: 'https://placehold.co/600x800/1a1a1a/C9A84C?text=Chioma+Lace',
    whatsappMessage: 'Hi 360 VOGUE, Chioma’s lace dress is beautiful. How many yards for a similar style?',
  },
  {
    id: '3',
    name: 'Tolani',
    location: 'Port Harcourt',
    fabric: 'Aso-Oke Set',
    occasion: 'Owambe Party',
    imageUrl: 'https://placehold.co/600x800/1a1a1a/C9A84C?text=Tolani+Aso-Oke',
    whatsappMessage: 'Hi 360 VOGUE, I want the Aso-Oke set like Tolani’s. Do you have it in stock?',
  },
  {
    id: '4',
    name: 'Folake',
    location: 'Ibadan',
    fabric: 'George Wrapper',
    occasion: 'Mother’s Day',
    imageUrl: 'https://placehold.co/600x800/1a1a1a/C9A84C?text=Folake+George',
    whatsappMessage: 'Hi 360 VOGUE, the George wrapper Folake wore is stunning. How can I order?',
  },
  {
    id: '5',
    name: 'Simi',
    location: 'Lagos',
    fabric: 'Chiffon Solid',
    occasion: 'Birthday Shoot',
    imageUrl: 'https://placehold.co/600x800/1a1a1a/C9A84C?text=Simi+Chiffon',
    whatsappMessage: 'Hi 360 VOGUE, I love the chiffon dress from Simi’s shoot. Please share available colors.',
  },
  {
    id: '6',
    name: 'Nkechi',
    location: 'Enugu',
    fabric: 'Satin Print',
    occasion: 'Engagement Party',
    imageUrl: 'https://placehold.co/600x800/1a1a1a/C9A84C?text=Nkechi+Satin',
    whatsappMessage: 'Hi 360 VOGUE, Nkechi’s satin dress is gorgeous. I want to order the same fabric.',
  },
];

export default function CustomerGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<CustomerPhoto | null>(null);
  const [loaded, setLoaded] = useState<Record<string, boolean>>({});

  const openLightbox = (photo: CustomerPhoto) => {
    setSelectedPhoto(photo);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = 'auto';
  };

  const handleWhatsApp = (photo: CustomerPhoto) => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(photo.whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-vogue-gold/10 text-vogue-gold px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-semibold">INSTAGRAM REALNESS</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-vogue-dark mb-3">
              Our Customers in 360 VOGUE
            </h2>
            <div className="w-20 h-1 bg-vogue-gold mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-md mx-auto">
              Real women, real fabrics, real compliments – see how they style our premium materials
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {customerPhotos.map((photo, idx) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => openLightbox(photo)}
              >
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <Image
                    src={photo.imageUrl}
                    alt={`${photo.name} wearing ${photo.fabric}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-white font-semibold">{photo.name}, {photo.location}</p>
                    <p className="text-vogue-gold text-sm">{photo.fabric}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-3 right-3 z-10 bg-black/50 rounded-full p-2 hover:bg-black/70 transition"
            >
              <X className="w-5 h-5 text-white" />
            </button>
            <div className="relative aspect-[4/5] md:aspect-[4/3]">
              <Image
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.name}
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-heading font-bold text-vogue-dark">
                {selectedPhoto.name}, {selectedPhoto.location}
              </h3>
              <p className="text-vogue-gold font-semibold mt-1">{selectedPhoto.fabric}</p>
              <p className="text-gray-600 mt-2">✨ Occasion: {selectedPhoto.occasion}</p>
              <div className="mt-4 flex gap-3">
                <button
                  onClick={() => handleWhatsApp(selectedPhoto)}
                  className="flex-1 bg-wa-green hover:bg-wa-green-dark text-white font-semibold py-3 rounded-full transition flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Order This Fabric
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}