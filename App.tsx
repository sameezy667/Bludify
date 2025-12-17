/**
 * App.tsx
 * 
 * Root application component for the Bludify secure tech marketplace.
 * Implements React Router for multi-page navigation with dedicated routes for:
 * - Home: Landing page with hero section and key features
 * - Marketplace: Product browsing with search and filtering
 * - Sell Device: Seller onboarding and information
 * - Verification: Trust protocol and verification standards
 * - Login: User authentication and account access
 * 
 * Layout Structure:
 * - Fixed global background pattern (dot-grid-bg)
 * - Persistent Navbar at top
 * - Main content area with route-based rendering
 * - Persistent Footer at bottom
 * 
 * Dependencies:
 * - react-router-dom: Client-side routing
 * - All page components from ./pages/
 * - Navbar and Footer components
 * 
 * NOTE: Dark mode is handled at the document root level via Tailwind's dark: classes
 * TODO: Add 404 error page route
 * TODO: Implement loading states for route transitions
 */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import SellDevice from './pages/SellDevice';
import Verification from './pages/Verification';
import Login from './pages/Login';

/**
 * Main application component that sets up routing and global layout.
 * 
 * @returns {JSX.Element} The complete application with routing configured
 */
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#F2F4F6] dark:bg-surface-0 text-slate-900 dark:text-text-primary selection:bg-neon selection:text-black font-sans transition-colors duration-300 relative">
        {/* Global Background Pattern Layer */}
        <div className="fixed inset-0 dot-grid-bg pointer-events-none z-0 opacity-100 dark:opacity-100" />
        
        {/* Content Layer */}
        <div className="relative z-10">
          <Navbar />
          
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/sell-device" element={<SellDevice />} />
              <Route path="/verification" element={<Verification />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;