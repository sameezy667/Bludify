/**
 * Home.tsx
 * 
 * Landing page component for Bludify marketplace.
 * Combines multiple section components to create an engaging homepage that:
 * - Showcases the 3D phone verification visualization
 * - Displays scrolling market category ticker
 * - Explains the trust protocol and verification process
 * - Highlights key platform features in a bento grid layout
 * 
 * Component Composition:
 * - Hero: Main value proposition with 3D phone and CTA buttons
 * - MarketTicker: Animated horizontal scroll of product categories
 * - ProtocolSection: 3-step verification process visualization
 * - BentoGrid: Feature showcase with diagnostic reports and benefits
 * 
 * Dependencies:
 * - ../components/Hero
 * - ../components/MarketTicker
 * - ../components/ProtocolSection
 * - ../components/BentoGrid
 * 
 * NOTE: All sections are responsive and support light/dark mode
 * TODO: Add scroll animations for section entrance
 * TODO: Implement lazy loading for below-fold sections
 */
import React from 'react';
import Hero from '../components/Hero';
import MarketTicker from '../components/MarketTicker';
import ProtocolSection from '../components/ProtocolSection';
import BentoGrid from '../components/BentoGrid';

/**
 * Home page component that combines all landing page sections.
 * 
 * @returns {JSX.Element} The complete homepage layout
 */
const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <MarketTicker />
            <ProtocolSection />
            <BentoGrid />
        </>
    );
};

export default Home;
