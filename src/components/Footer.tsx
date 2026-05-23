import { MessageCircle, Mail, MapPin, Share2, Users } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/lib/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-vogue-dark text-white/80 pt-16 pb-8">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 text-center md:text-left">
          <div>
            <h3 className="text-3xl font-heading font-bold mb-4">360<span className="text-vogue-gold">VOGUE</span></h3>
            <p className="text-sm text-white/60">Premium Nigerian fabrics — Ankara, Lace, Aso-Oke, George, Chiffon, Satin. Delivered to your doorstep nationwide.</p>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20360%20VOGUE`} target="_blank" className="hover:text-wa-green transition flex items-center justify-center md:justify-start gap-2"><MessageCircle className="w-4 h-4" /> Order on WhatsApp</a></li>
              <li><a href="#" className="hover:text-vogue-gold transition">Track Order (WhatsApp)</a></li>
              <li><a href="#" className="hover:text-vogue-gold transition">Wholesale Inquiry</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center justify-center md:justify-start gap-2"><MessageCircle className="w-4 h-4 text-wa-green" /> WhatsApp Only</li>
              <li className="flex items-center justify-center md:justify-start gap-2"><Mail className="w-4 h-4" /> hello@360vogue.ng</li>
              <li className="flex items-center justify-center md:justify-start gap-2"><MapPin className="w-4 h-4 text-vogue-gold" /> Central Market, Kaduna, Nigeria</li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="#" className="hover:text-vogue-gold transition transform hover:scale-110"><Share2 className="w-5 h-5" /></a>
              <a href="#" className="hover:text-vogue-gold transition transform hover:scale-110"><Users className="w-5 h-5" /></a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" className="hover:text-wa-green transition transform hover:scale-110"><MessageCircle className="w-5 h-5" /></a>
            </div>
            <p className="text-xs text-white/40 mt-2">Instagram & Facebook coming soon</p>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 text-center text-xs text-white/40">© {currentYear} 360 VOGUE. All rights reserved. Premium fabrics for the modern Nigerian woman.</div>
      </div>
    </footer>
  );
}