/**
 * components/Navbar.tsx (Next.js version)
 * 
 * Global navigation component with floating glassmorphism design.
 * Features:
 * - Logo with shield icon and Bludify branding
 * - Navigation links: Marketplace, Sell Device, Verification
 * - Search bar with focus expansion animation
 * - Dark/light theme toggle with system preference sync
 * - Login button with router navigation
 * - Responsive design with mobile menu support
 */
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShieldCheck, Search, Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Navigation bar component with theme toggle and routing.
 * 
 * @returns {JSX.Element} Rendered navbar with all navigation elements
 */
const Navbar: React.FC = () => {
    // Search bar focus state for width expansion animation
    const [isFocused, setIsFocused] = useState<boolean>(false);
    
    // Dark mode state synced with document root element
    const [isDark, setIsDark] = useState<boolean>(false);
    const [mounted, setMounted] = useState(false);

    /**
     * Synchronizes component state with DOM dark mode class on mount.
     * Checks document.documentElement for 'dark' class to maintain consistency.
     */
    useEffect(() => {
        setMounted(true);
        setIsDark(document.documentElement.classList.contains('dark'));
    }, []);

    const toggleTheme = () => {
        const html = document.documentElement;
        if (isDark) {
            html.classList.remove('dark');
            setIsDark(false);
        } else {
            html.classList.add('dark');
            setIsDark(true);
        }
    };

    // Prevent hydration mismatch by not rendering until mounted
    if (!mounted) {
        return null;
    }

    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
            <motion.nav
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full max-w-5xl h-16 bg-white/70 dark:bg-[#050505]/90 backdrop-blur-xl border border-white/20 dark:border-surface-3 rounded-full flex items-center justify-between px-2 pl-6 shadow-[0_8px_32px_rgba(0,0,0,0.05)] dark:shadow-2xl pointer-events-auto transition-colors duration-300"
            >
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 cursor-pointer group mr-8">
                    <div className="bg-neon flex items-center justify-center w-8 h-8 rounded-lg shadow-[0_0_15px_rgba(0,224,143,0.3)]">
                        <ShieldCheck className="w-5 h-5 text-black" strokeWidth={2.5} />
                    </div>
                    <span className="font-bold text-lg tracking-tight text-zinc-900 dark:text-white group-hover:text-neon transition-colors">Bludify</span>
                </Link>

                {/* Centered Links - Desktop */}
                <div className="hidden md:flex items-center gap-1">
                    <Link 
                        href="/marketplace"
                        className="px-5 py-2 text-sm font-medium text-zinc-600 dark:text-text-muted hover:text-black dark:hover:text-white transition-colors rounded-full hover:bg-black/5 dark:hover:bg-surface-2 whitespace-nowrap"
                    >
                        Marketplace
                    </Link>
                    <Link 
                        href="/sell-device"
                        className="px-5 py-2 text-sm font-medium text-zinc-600 dark:text-text-muted hover:text-black dark:hover:text-white transition-colors rounded-full hover:bg-black/5 dark:hover:bg-surface-2 whitespace-nowrap"
                    >
                        Sell Device
                    </Link>
                    <Link 
                        href="/verification"
                        className="px-5 py-2 text-sm font-medium text-zinc-600 dark:text-text-muted hover:text-black dark:hover:text-white transition-colors rounded-full hover:bg-black/5 dark:hover:bg-surface-2 whitespace-nowrap"
                    >
                        Verification
                    </Link>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-3 ml-auto">
                    <div className={`relative hidden sm:flex items-center transition-all duration-300 ${isFocused ? 'w-64' : 'w-48'}`}>
                        <Search className="absolute left-3 w-4 h-4 text-zinc-400 dark:text-text-muted" />
                        <input
                            type="text"
                            placeholder="Search..."
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            className="w-full bg-black/5 dark:bg-[#0A0A0A] border border-transparent dark:border-surface-3 rounded-full py-2 pl-10 pr-4 text-sm text-black dark:text-white focus:outline-none focus:border-neon/50 focus:ring-1 focus:ring-neon/50 transition-all placeholder:text-zinc-400 dark:placeholder:text-text-muted/60"
                        />
                    </div>
                    
                    <button 
                        onClick={toggleTheme}
                        className="p-2 rounded-full border border-black/5 dark:border-surface-3 hover:border-neon text-zinc-600 dark:text-gray-400 hover:text-neon transition-all bg-white dark:bg-[#0A0A0A]"
                    >
                        {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    </button>

                    <Link 
                        href="/login"
                        className="px-6 py-2 rounded-full border border-black/5 dark:border-surface-3 hover:border-black dark:hover:border-white text-sm font-medium text-black dark:text-white transition-all bg-white dark:bg-[#0A0A0A] hover:bg-gray-100 dark:hover:bg-surface-3 shadow-sm dark:shadow-none whitespace-nowrap cursor-pointer inline-block"
                    >
                        Login
                    </Link>
                </div>
            </motion.nav>
        </div>
    );
};

export default Navbar;