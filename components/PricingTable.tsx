'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { PricingTier } from '@/types';

const tiers: PricingTier[] = [
    {
        name: "Guest",
        fee: "5%",
        features: ["Basic Verification", "Manual Listings"],
        cta: "Start Selling",
        color: "gray"
    },
    {
        name: "Power",
        fee: "3%",
        features: ["Cross-posting Tool", "Priority Verification", "Bulk CSV"],
        cta: "Apply Now",
        isPopular: true,
        color: "neon"
    },
    {
        name: "Business",
        fee: "1%",
        features: ["API Access", "Dedicated Support", "Warehousing"],
        cta: "Contact",
        color: "gray"
    }
];

const PricingTable: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

    return (
        <section className="py-24 bg-gray-50 dark:bg-surface-0 relative border-t border-gray-200 dark:border-surface-3/30 transition-colors duration-300">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-medium text-gray-900 dark:text-white mb-4 transition-colors">Seller Tiers</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 items-end max-w-5xl mx-auto">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className={`
                                relative p-8 rounded-2xl border transition-all duration-300 shadow-sm dark:shadow-none
                                ${tier.isPopular 
                                    ? 'bg-white dark:bg-surface-1 border-neon' 
                                    : 'bg-white/50 dark:bg-surface-1/50 border-gray-200 dark:border-surface-3 hover:border-gray-300 dark:hover:border-surface-2'
                                }
                                ${hoveredIndex === index ? 'translate-y-[-4px]' : ''}
                            `}
                        >
                            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2 transition-colors">{tier.name}</h3>
                            <div className="flex items-baseline gap-1 mb-8">
                                <span className={`text-3xl font-bold ${tier.color === 'neon' ? 'text-neon' : 'text-gray-900 dark:text-white'}`}>{tier.fee}</span>
                                <span className="text-gray-500 dark:text-text-muted text-xs">/ txn</span>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {tier.features.map((feat, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-gray-600 dark:text-text-muted transition-colors">
                                        <Check className={`w-3 h-3 ${tier.color === 'neon' ? 'text-neon' : 'text-gray-400 dark:text-surface-3'}`} />
                                        {feat}
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-2.5 rounded-lg text-sm font-medium transition-colors ${
                                tier.isPopular 
                                    ? 'bg-neon text-black hover:bg-neon/90' 
                                    : 'bg-gray-100 dark:bg-surface-2 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-surface-3'
                            }`}>
                                {tier.cta}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingTable;