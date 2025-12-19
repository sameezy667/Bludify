/**
 * app/page.tsx
 * 
 * Home page component for Next.js App Router.
 * Landing page that combines multiple section components to create an engaging homepage.
 * 
 * Component Composition:
 * - Hero: Main value proposition with 3D phone and CTA buttons
 * - MarketTicker: Animated horizontal scroll of product categories
 * - ProtocolSection: 3-step verification process visualization
 * - BentoGrid: Feature showcase with diagnostic reports and benefits
 */
import Hero from '@/components/Hero';
import MarketTicker from '@/components/MarketTicker';
import ProtocolSection from '@/components/ProtocolSection';
import BentoGrid from '@/components/BentoGrid';

export default function Home() {
  return (
    <>
      <Hero />
      <MarketTicker />
      <ProtocolSection />
      <BentoGrid />
    </>
  );
}
