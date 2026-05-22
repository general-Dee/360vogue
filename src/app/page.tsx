import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import FeaturedCollection from '@/components/FeaturedCollection';

export default function Home() {
  return (
    <main>
      <div id="hero"><Hero /></div>
      <TrustBar />
      <div id="featured"><FeaturedCollection /></div>
    </main>
  );
}