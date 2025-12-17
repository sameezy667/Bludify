import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarketTicker from './components/MarketTicker';
import ProtocolSection from './components/ProtocolSection';
import BentoGrid from './components/BentoGrid';
import MarketplacePreview from './components/MarketplacePreview';
import PricingTable from './components/PricingTable';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#F2F4F6] dark:bg-surface-0 text-slate-900 dark:text-text-primary selection:bg-neon selection:text-black font-sans transition-colors duration-300 relative">
      {/* Global Background Pattern Layer */}
      <div className="fixed inset-0 dot-grid-bg pointer-events-none z-0 opacity-100 dark:opacity-100" />
      
      {/* Content Layer */}
      <div className="relative z-10">
        <Navbar />
        
        <main>
          <Hero />
          <MarketTicker />
          <ProtocolSection />
          <MarketplacePreview />
          <BentoGrid />
          <PricingTable />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;