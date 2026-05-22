'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Ruler, HelpCircle, MessageCircle, Check } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/lib/data';

interface YardageResult {
  yards: number;
  description: string;
}

const garmentTypes = [
  { id: 'dress', label: 'Dress (midi/maxi)', baseYards: { S: 4, M: 4.5, L: 5, XL: 5.5, XXL: 6 } },
  { id: 'iro_buba', label: 'Iro & Buba (wrapper + blouse)', baseYards: { S: 5, M: 5.5, L: 6, XL: 6.5, XXL: 7 } },
  { id: 'gown', label: 'Flowing Gown / Kaftan', baseYards: { S: 5.5, M: 6, L: 6.5, XL: 7, XXL: 7.5 } },
  { id: 'skirt_blouse', label: 'Skirt & Blouse set', baseYards: { S: 4, M: 4.5, L: 5, XL: 5.5, XXL: 6 } },
  { id: 'jumpsuit', label: 'Jumpsuit / Playsuit', baseYards: { S: 4.5, M: 5, L: 5.5, XL: 6, XXL: 6.5 } },
  { id: 'native_attire', label: 'Native Attire (men)', baseYards: { S: 5, M: 5.5, L: 6, XL: 6.5, XXL: 7 } },
];

const sizes = [
  { id: 'S', label: 'Small', range: 'UK 8-10' },
  { id: 'M', label: 'Medium', range: 'UK 12-14' },
  { id: 'L', label: 'Large', range: 'UK 16-18' },
  { id: 'XL', label: 'Extra Large', range: 'UK 20-22' },
  { id: 'XXL', label: 'XXL', range: 'UK 24+' },
];

export default function YardageCalculator() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGarment, setSelectedGarment] = useState(garmentTypes[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[2]);
  const [calculatedYards, setCalculatedYards] = useState<number | null>(null);

  const calculateYards = () => {
    const yards = selectedGarment.baseYards[selectedSize.id as keyof typeof selectedGarment.baseYards];
    setCalculatedYards(yards);
  };

  const sendToWhatsApp = () => {
    const message = `Hi 360 VOGUE, I need help with yardage. I want to sew a ${selectedGarment.label} (${selectedSize.label} - ${selectedSize.range}) and the calculator suggests ${calculatedYards} yards. Do you recommend this amount?`;
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-4 z-40 bg-vogue-gold hover:bg-vogue-gold/90 text-vogue-dark p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2 md:bottom-6"
        aria-label="Yardage Calculator"
      >
        <Ruler className="w-5 h-5" />
        <span className="hidden md:inline text-sm font-semibold">Need yardage help?</span>
      </button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative max-w-lg w-full bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-vogue-gold/10 rounded-full flex items-center justify-center">
                    <Ruler className="w-6 h-6 text-vogue-gold" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-vogue-dark">
                      Yardage Calculator
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Find out how many yards you need for your project
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Garment type */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      What are you sewing?
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {garmentTypes.map((garment) => (
                        <button
                          key={garment.id}
                          onClick={() => {
                            setSelectedGarment(garment);
                            setCalculatedYards(null);
                          }}
                          className={`px-3 py-2 text-sm rounded-lg border transition ${
                            selectedGarment.id === garment.id
                              ? 'border-vogue-gold bg-vogue-gold/10 text-vogue-gold font-semibold'
                              : 'border-gray-200 hover:border-vogue-gold/50'
                          }`}
                        >
                          {garment.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Size */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your size
                    </label>
                    <div className="grid grid-cols-5 gap-2">
                      {sizes.map((size) => (
                        <button
                          key={size.id}
                          onClick={() => {
                            setSelectedSize(size);
                            setCalculatedYards(null);
                          }}
                          className={`px-2 py-2 text-sm rounded-lg border transition ${
                            selectedSize.id === size.id
                              ? 'border-vogue-gold bg-vogue-gold/10 text-vogue-gold font-semibold'
                              : 'border-gray-200 hover:border-vogue-gold/50'
                          }`}
                        >
                          <div>{size.label}</div>
                          <div className="text-xs text-gray-400">{size.range}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Calculate button */}
                  <button
                    onClick={calculateYards}
                    className="w-full bg-vogue-gold text-vogue-dark font-semibold py-3 rounded-lg hover:bg-vogue-gold/90 transition"
                  >
                    Calculate Yards
                  </button>

                  {/* Result */}
                  {calculatedYards !== null && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-green-50 border border-green-200 rounded-lg p-4 text-center"
                    >
                      <Check className="w-6 h-6 text-green-600 mx-auto mb-2" />
                      <p className="text-green-800 font-semibold">
                        You need approximately <span className="text-2xl font-bold">{calculatedYards}</span> yards
                      </p>
                      <p className="text-green-700 text-sm mt-1">
                        for a {selectedGarment.label} (size {selectedSize.label})
                      </p>
                      <button
                        onClick={sendToWhatsApp}
                        className="mt-3 bg-wa-green text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center justify-center gap-2 mx-auto hover:bg-wa-green-dark transition"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Ask us on WhatsApp for confirmation
                      </button>
                    </motion.div>
                  )}

                  <p className="text-xs text-gray-400 text-center mt-4">
                    *This is an estimate. Styles vary – we'll help you confirm on WhatsApp.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}