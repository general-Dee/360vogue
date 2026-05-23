import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import FeaturedCollection from '@/components/FeaturedCollection';
import Categories from '@/components/Categories';
import BestSellers from '@/components/BestSellers';
import HowToOrder from '@/components/HowToOrder';
import Testimonials from '@/components/Testimonials';
import Urgency from '@/components/Urgency';
import FAQ from '@/components/FAQ';
import CTABlock from '@/components/CTABlock';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import CustomerGallery from '@/components/CustomerGallery';

export default function Home() {
  return (
    <main className="relative">
      <div id="hero"><Hero /></div>
      <TrustBar />
      <div id="featured"><FeaturedCollection /></div>
      <div id="categories"><Categories /></div>
      <BestSellers />
      <HowToOrder />
      <Testimonials />
      <CustomerGallery />
      <Urgency />
      <FAQ />
      <CTABlock />
      <StickyMobileCTA />
    </main>
  );
}