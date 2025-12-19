/**
 * app/layout.tsx
 * 
 * Root layout component for Next.js App Router.
 * Implements global layout structure with:
 * - HTML and body setup with dark mode class
 * - Global background pattern (dot-grid-bg)
 * - Persistent Navbar and Footer components
 * - Font configuration (Inter and JetBrains Mono)
 * - Tailwind CSS and custom styles
 * 
 * This layout wraps all pages in the application.
 */
import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Bludify | The Secure Layer for Tech',
  description: 'Pre-owned tech, verified by humans. Secured by code.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        <div className="min-h-screen bg-[#F2F4F6] dark:bg-surface-0 text-slate-900 dark:text-text-primary selection:bg-neon selection:text-black font-sans transition-colors duration-300 relative">
          {/* Global Background Pattern Layer */}
          <div className="fixed inset-0 dot-grid-bg pointer-events-none z-0 opacity-100 dark:opacity-100" />
          
          {/* Content Layer */}
          <div className="relative z-10">
            <Navbar />
            
            <main>
              {children}
            </main>

            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
