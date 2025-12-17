import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Battery, ShieldCheck, Zap, Package, Smartphone, Globe, Repeat, Check, Moon, Sun } from 'lucide-react';

const BentoGrid: React.FC = () => {
    // Local state for toggle demonstration
    const [isDark, setIsDark] = useState(true);

    // Effect to toggle the global class for demonstration purposes
    useEffect(() => {
        const html = document.documentElement;
        if (isDark) {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }
    }, [isDark]);

    return (
        <section className="py-24 transition-colors duration-300 bg-[#F2F4F6] dark:bg-[#030304] border-t border-black/5 dark:border-[#1F1F1F]">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <span className="text-[#00E08F] font-mono text-[10px] tracking-widest uppercase mb-2 block">Transparency</span>
                        <h2 className="text-3xl md:text-4xl font-normal text-zinc-900 dark:text-white transition-colors duration-300">Engineered for Trust.</h2>
                    </div>
                    
                    {/* Toggle Button */}
                    <button 
                        onClick={() => setIsDark(!isDark)}
                        className="p-2 rounded-full border border-black/10 dark:border-[#1F1F1F] bg-white dark:bg-[#0A0A0A] hover:border-[#00E08F] transition-all group"
                    >
                        {isDark ? (
                            <Sun className="w-5 h-5 text-gray-400 group-hover:text-[#00E08F]" />
                        ) : (
                            <Moon className="w-5 h-5 text-gray-600 group-hover:text-[#00E08F]" />
                        )}
                    </button>
                </div>

                {/* Grid Container: 3 Columns, Fixed Row Height */}
                <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[180px] gap-4">
                    
                    {/* Item 1: Diagnostic Report (2x2) */}
                    <motion.div 
                        whileHover={{ y: -4, borderColor: '#00E08F' }}
                        transition={{ duration: 0.2 }}
                        className="md:col-span-2 md:row-span-2 bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-[#1F1F1F] rounded-2xl p-8 relative overflow-hidden group flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-none transition-colors duration-300"
                    >
                        <div className="flex justify-between items-start z-10">
                            <div>
                                <h3 className="text-xl text-zinc-900 dark:text-white font-medium mb-1 transition-colors duration-300">Diagnostic Report Live View</h3>
                                <p className="text-zinc-500 dark:text-[#888] text-sm transition-colors duration-300">Real-time hardware verification results.</p>
                            </div>
                            <Smartphone className="text-[#00E08F] w-6 h-6" />
                        </div>

                        <div className="flex items-end justify-between mt-8 z-10">
                            <div className="space-y-4 font-mono text-sm">
                                <div className="flex items-center gap-3 text-zinc-600 dark:text-[#F0F0F0]">
                                    <Battery className="w-4 h-4 text-[#00E08F]" />
                                    <span>Battery Cycle: <span className="text-zinc-900 dark:text-white font-bold transition-colors duration-300">142</span> (Normal)</span>
                                </div>
                                <div className="flex items-center gap-3 text-zinc-600 dark:text-[#F0F0F0]">
                                    <Globe className="w-4 h-4 text-zinc-400 dark:text-[#888]" />
                                    <span>Region: <span className="text-zinc-900 dark:text-white font-bold transition-colors duration-300">Global</span></span>
                                </div>
                                <div className="flex items-center gap-3 text-zinc-600 dark:text-[#F0F0F0]">
                                    <Repeat className="w-4 h-4 text-zinc-400 dark:text-[#888]" />
                                    <span>Parts: <span className="text-zinc-900 dark:text-white font-bold transition-colors duration-300">Original</span></span>
                                </div>
                            </div>

                            {/* Circular Progress Bar */}
                            <div className="relative w-32 h-32 flex items-center justify-center">
                                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8" className="text-gray-100 dark:text-[#1F1F1F] transition-colors duration-300" />
                                    <motion.circle 
                                        cx="50" cy="50" r="45" fill="none" stroke="#00E08F" strokeWidth="8"
                                        strokeDasharray="283"
                                        strokeDashoffset="283"
                                        initial={{ strokeDashoffset: 283 }}
                                        whileInView={{ strokeDashoffset: 10 }} // ~96%
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                        strokeLinecap="round"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-3xl font-bold text-zinc-900 dark:text-white transition-colors duration-300">98</span>
                                    <span className="text-[10px] text-zinc-500 dark:text-[#888] uppercase tracking-wider transition-colors duration-300">Score</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Background Grid Decoration */}
                        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] bg-[size:16px_16px] opacity-50 z-0 pointer-events-none transition-colors duration-300" />
                    </motion.div>


                    {/* Item 2: Post Anywhere (1x2 Tall) */}
                    <motion.div 
                        whileHover={{ y: -4, borderColor: '#00E08F' }}
                        transition={{ duration: 0.2 }}
                        className="md:col-span-1 md:row-span-2 bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-[#1F1F1F] rounded-2xl p-6 relative overflow-hidden group flex flex-col shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-none transition-colors duration-300"
                    >
                        <div className="mb-8 z-10">
                             <h3 className="text-xl text-zinc-900 dark:text-white font-medium mb-1 transition-colors duration-300">Post Anywhere</h3>
                             <p className="text-zinc-500 dark:text-[#888] text-sm transition-colors duration-300">One listing, everywhere.</p>
                        </div>

                        <div className="flex-1 flex flex-col items-center justify-center relative z-10">
                            {/* Central Hub */}
                            <div className="w-16 h-16 bg-[#00E08F]/10 border border-[#00E08F] rounded-full flex items-center justify-center mb-12 relative shadow-[0_0_20px_rgba(0,224,143,0.2)]">
                                <ShieldCheck className="w-8 h-8 text-[#00E08F]" />
                                {/* Connecting Lines */}
                                <div className="absolute top-full left-1/2 w-px h-12 bg-gradient-to-b from-[#00E08F] to-transparent"></div>
                                <div className="absolute top-full left-1/2 w-px h-12 bg-gradient-to-b from-[#00E08F] to-transparent rotate-[45deg] origin-top"></div>
                                <div className="absolute top-full left-1/2 w-px h-12 bg-gradient-to-b from-[#00E08F] to-transparent rotate-[-45deg] origin-top"></div>
                            </div>

                            {/* Connected Platforms */}
                            <div className="flex justify-between w-full px-2">
                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-[#1A1A1A] border border-black/5 dark:border-[#333] flex items-center justify-center text-[10px] font-bold text-zinc-900 dark:text-white transition-colors duration-300">OLX</div>
                                </div>
                                <div className="flex flex-col items-center gap-2 translate-y-4">
                                    <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-[#1A1A1A] border border-black/5 dark:border-[#333] flex items-center justify-center text-[10px] font-bold text-zinc-900 dark:text-white transition-colors duration-300">eBay</div>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-[#1A1A1A] border border-black/5 dark:border-[#333] flex items-center justify-center text-[10px] font-bold text-zinc-900 dark:text-white transition-colors duration-300">Mer</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>


                    {/* Item 3: Fraud Prevention (1x1) */}
                    <motion.div 
                        whileHover={{ y: -4, borderColor: '#00E08F' }}
                        transition={{ duration: 0.2 }}
                        className="md:col-span-1 bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-[#1F1F1F] rounded-2xl p-6 flex flex-col justify-between group shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-none transition-colors duration-300"
                    >
                        <div className="w-10 h-10 rounded-lg bg-[#00E08F]/10 flex items-center justify-center mb-4">
                            <ShieldCheck className="w-5 h-5 text-[#00E08F]" />
                        </div>
                        <div>
                            <h3 className="text-base text-zinc-900 dark:text-white font-medium transition-colors duration-300">Fraud Prevention</h3>
                            <p className="text-zinc-500 dark:text-[#888] text-xs mt-1 transition-colors duration-300">Zero lemons. Identity verified.</p>
                        </div>
                        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Check className="w-4 h-4 text-[#00E08F]" />
                        </div>
                    </motion.div>


                    {/* Item 4: Instant Payouts (1x1) */}
                    <motion.div 
                        whileHover={{ y: -4, borderColor: '#00E08F' }}
                        transition={{ duration: 0.2 }}
                        className="md:col-span-1 bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-[#1F1F1F] rounded-2xl p-6 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-none transition-colors duration-300"
                    >
                         <div className="w-10 h-10 rounded-lg bg-[#00E08F]/10 flex items-center justify-center mb-4">
                            <Zap className="w-5 h-5 text-[#00E08F]" />
                        </div>
                        <div>
                            <h3 className="text-base text-zinc-900 dark:text-white font-medium transition-colors duration-300">Instant Payouts</h3>
                            <p className="text-2xl font-mono text-zinc-900 dark:text-white mt-1 tracking-tight transition-colors duration-300">₹1,25,000</p>
                        </div>
                    </motion.div>


                    {/* Item 5: Tamper Proof Packaging (1x1) */}
                    <motion.div 
                        whileHover={{ y: -4, borderColor: '#00E08F' }}
                        transition={{ duration: 0.2 }}
                        className="md:col-span-1 bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-[#1F1F1F] rounded-2xl p-6 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-none transition-colors duration-300"
                    >
                         <div className="w-10 h-10 rounded-lg bg-[#00E08F]/10 flex items-center justify-center mb-4">
                            <Package className="w-5 h-5 text-[#00E08F]" />
                        </div>
                        <div>
                            <h3 className="text-base text-zinc-900 dark:text-white font-medium transition-colors duration-300">Secure Packaging</h3>
                            <p className="text-zinc-500 dark:text-[#888] text-xs mt-1 transition-colors duration-300">Tamper-proof 'Black Box' sealing.</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default BentoGrid;