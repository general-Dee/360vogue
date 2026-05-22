import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const faqs = [
  { question: 'How do I know the quality is real?', answer: 'We source directly from premium textile mills. Every fabric is inspected before shipping. Plus, 1,200+ Nigerian women trust us — check our testimonials!' },
  { question: 'Do you deliver to my state?', answer: 'Yes! We deliver nationwide across Nigeria — Lagos, Abuja, Port Harcourt, Ibadan, Kano, Enugu, Benin, and all states. Delivery takes 2-5 business days.' },
  { question: 'Can I see more patterns before ordering?', answer: 'Absolutely! Message us on WhatsApp and ask for our full catalog. We\'ll send you videos and additional photos of available patterns.' },
  { question: 'What if I don\'t like it when it arrives?', answer: 'Customer satisfaction is our priority. If you\'re unhappy with the quality, contact us within 48 hours of delivery. We offer returns or exchanges (terms apply).' },
  { question: 'How many yards do I need for a dress?', answer: 'A typical dress requires 4-6 yards depending on size and style. For iro and buba (wrapper and blouse), you need 5-6 yards. Our WhatsApp team can guide you!' },
  { question: 'What payment methods do you accept?', answer: 'We accept Cash on Delivery (COD), bank transfer, and card payments via Paystack. COD available in major cities.' },
];

export default function FAQ() {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto max-w-3xl">
        <div className="text-center mb-12"><div className="inline-flex items-center gap-2 bg-vogue-gold/10 text-vogue-gold px-4 py-2 rounded-full mb-4"><HelpCircle className="w-4 h-4" /><span className="text-sm font-semibold">FAQ</span></div><h2 className="text-3xl md:text-5xl font-heading font-bold text-vogue-dark mb-3">Got Questions?</h2><div className="w-20 h-1 bg-vogue-gold mx-auto"></div><p className="text-gray-600 mt-4">We've got answers — your peace of mind matters</p></div>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-4 bg-gray-50">
              <AccordionTrigger className="hover:text-vogue-gold transition-colors font-semibold">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-8 text-center"><p className="text-gray-500 text-sm">Still have questions? <a href="https://wa.me/234XXXXXXXXXX?text=Hi%20360%20VOGUE%2C%20I%20have%20a%20question" target="_blank" className="text-wa-green font-semibold hover:underline">Chat with us on WhatsApp</a></p></div>
      </div>
    </section>
  );
}