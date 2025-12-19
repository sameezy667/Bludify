'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Complex SVG Animations to simulate Lottie quality

const LockAnimation = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-900 dark:text-white group-hover:text-neon transition-colors duration-500">
        <motion.rect 
            x="5" y="11" width="14" height="10" rx="2" 
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1 }}
        />
        <motion.path 
            d="M8 11V7a4 4 0 0 1 8 0v4" 
            initial={{ pathLength: 0, y: -5 }}
            whileInView={{ pathLength: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.circle cx="12" cy="16" r="1" fill="currentColor" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1.2 }} />
    </svg>
);

const ScanAnimation = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-900 dark:text-white group-hover:text-neon transition-colors duration-500">
        <motion.path d="M4 8V6a2 2 0 0 1 2-2h2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 0.5 }} />
        <motion.path d="M4 16v2a2 2 0 0 0 2 2h2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.1 }} />
        <motion.path d="M16 4h2a2 2 0 0 1 2 2v2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.2 }} />
        <motion.path d="M16 20h2a2 2 0 0 0 2-2v-2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.3 }} />
        
        {/* Scanning Line */}
        <motion.line 
            x1="4" y1="12" x2="20" y2="12" 
            stroke="currentColor" 
            strokeDasharray="4 4"
            animate={{ y: [0, -6, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
    </svg>
);

const HandshakeAnimation = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-900 dark:text-white group-hover:text-neon transition-colors duration-500">
        <motion.rect x="2" y="6" width="20" height="12" rx="2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} />
        <motion.circle cx="12" cy="12" r="2" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.8 }} />
        <motion.path d="M6 12h.01M18 12h.01" strokeWidth="3" strokeLinecap="round" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1 }} />
    </svg>
);

const Step: React.FC<{ 
    IconComponent: React.FC, 
    title: string, 
    desc: string, 
    delay: number
}> = ({ IconComponent, title, desc, delay }) => (
    <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay, duration: 0.5 }}
        className="relative flex flex-col items-center text-center p-6 lg:p-12 group"
    >
        <div className="w-20 h-20 rounded-3xl bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-surface-3 flex items-center justify-center mb-8 group-hover:border-neon/50 group-hover:shadow-[0_0_30px_rgba(0,224,143,0.1)] transition-all duration-500 relative z-10 shadow-sm dark:shadow-none">
            <IconComponent />
        </div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3 tracking-tight transition-colors">{title}</h3>
        <p className="text-gray-600 dark:text-text-muted text-sm font-light leading-relaxed max-w-xs transition-colors">{desc}</p>
    </motion.div>
);

const ProtocolSection: React.FC = () => {
    return (
        <section className="py-24 relative bg-gray-50 dark:bg-surface-0 overflow-hidden border-t border-gray-200 dark:border-surface-3/30 transition-colors duration-300">
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-3xl md:text-4xl font-normal text-gray-900 dark:text-white mb-4 transition-colors"
                    >
                        Trust isn't just a word.
                    </motion.h2>
                    <p className="text-gray-600 dark:text-text-muted font-light transition-colors">It's a protocol verified by code and humans.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line */}
                    <div className="hidden md:block absolute top-20 left-[16%] right-[16%] h-[1px] bg-gradient-to-r from-gray-200 via-gray-200 to-gray-200 dark:from-surface-3 dark:via-surface-3 dark:to-surface-3 z-0 transition-colors">
                         <motion.div 
                            className="w-full h-full bg-gradient-to-r from-transparent via-neon to-transparent"
                            initial={{ x: '-100%' }}
                            whileInView={{ x: '100%' }}
                            transition={{ duration: 2, ease: "linear", repeat: Infinity }}
                         />
                    </div>
                    
                    <Step 
                        IconComponent={LockAnimation}
                        title="1. Escrow Secured" 
                        desc="Funds move to a secure vault. Seller sees proof of funds but cannot access them." 
                        delay={0.1}
                    />
                    <Step 
                        IconComponent={ScanAnimation}
                        title="2. Physical Verification" 
                        desc="Our agent verifies the device condition via a 50-point diagnostic check." 
                        delay={0.2}
                    />
                    <Step 
                        IconComponent={HandshakeAnimation}
                        title="3. Delivery & Release" 
                        desc="Device is sealed. Funds released instantly upon handover." 
                        delay={0.3}
                    />
                </div>
            </div>
        </section>
    );
};

export default ProtocolSection;