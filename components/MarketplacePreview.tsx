'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '@/types';
import { ShieldCheck, ArrowUpRight } from 'lucide-react';

const products: Product[] = [
    {
        id: "TK-8829-XJ",
        title: "MacBook Pro 14 M1 Pro",
        price: 125000,
        image: "https://picsum.photos/400/300?grayscale",
        specs: "16GB • 512GB",
        condition: "Excellent",
        verified: true,
        escrowSecured: true
    },
    {
        id: "TK-9921-AB",
        title: "iPhone 14 Pro",
        price: 82000,
        image: "https://picsum.photos/400/400?grayscale",
        specs: "Deep Purple • 256GB",
        condition: "Good",
        verified: true,
        escrowSecured: true
    },
     {
        id: "TK-1102-ZZ",
        title: "Sony WH-1000XM5",
        price: 18000,
        image: "https://picsum.photos/400/350?grayscale",
        specs: "Silver • Box",
        condition: "Excellent",
        verified: true,
        escrowSecured: true
    }
];

const ProductCard: React.FC<{ product: Product, index: number }> = ({ product, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="group relative bg-white dark:bg-surface-1 rounded-xl overflow-hidden border border-gray-200 dark:border-surface-3 hover:border-gray-300 dark:hover:border-surface-2 transition-colors shadow-sm dark:shadow-none"
    >
        {/* Image Area */}
        <div className="aspect-[4/3] bg-gray-100 dark:bg-surface-2 relative overflow-hidden transition-colors">
             <img src={product.image} alt={product.title} className="w-full h-full object-cover opacity-90 dark:opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
             <div className="absolute inset-0 bg-gradient-to-t from-white/10 dark:from-surface-1 via-transparent to-transparent" />
             
             {/* Overlay Badges */}
             <div className="absolute top-3 left-3 flex gap-2">
                 {product.verified && (
                     <span className="bg-black/80 backdrop-blur border border-surface-3 text-neon text-[10px] px-2 py-1 rounded font-mono uppercase tracking-wider flex items-center gap-1">
                         <ShieldCheck className="w-3 h-3" /> Verified
                     </span>
                 )}
             </div>
        </div>

        {/* Content Area */}
        <div className="p-5">
            <div className="flex justify-between items-start mb-2">
                <div className="text-[10px] font-mono text-gray-500 dark:text-text-muted mb-1 transition-colors">{product.id}</div>
                <div className="text-[10px] px-2 py-0.5 rounded border border-gray-200 dark:border-surface-3 text-gray-600 dark:text-text-muted transition-colors">
                    {product.condition}
                </div>
            </div>
            
            <h3 className="text-gray-900 dark:text-white font-medium text-base mb-1 transition-colors">{product.title}</h3>
            <p className="text-gray-600 dark:text-text-muted text-xs mb-4 transition-colors">{product.specs}</p>
            
            <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-surface-3 transition-colors">
                <span className="text-lg font-medium text-gray-900 dark:text-white transition-colors">₹{product.price.toLocaleString()}</span>
                <button className="p-2 rounded-full bg-gray-100 dark:bg-surface-2 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black text-gray-900 dark:text-white transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    </motion.div>
);

const MarketplacePreview: React.FC = () => {
    return (
        <section className="py-24 bg-gray-50 dark:bg-surface-0 border-t border-gray-200 dark:border-surface-3/30 transition-colors duration-300">
             <div className="container mx-auto px-6 lg:px-12">
                <div className="flex justify-between items-end mb-12">
                     <div>
                        <h2 className="text-3xl md:text-4xl font-medium text-gray-900 dark:text-white mb-2 transition-colors">Fresh Arrivals</h2>
                    </div>
                    <a href="#" className="hidden md:flex items-center gap-2 text-neon hover:text-gray-900 dark:hover:text-white transition-colors text-xs font-mono uppercase tracking-wider">
                        View All <ArrowUpRight className="w-4 h-4" />
                    </a>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((p, i) => (
                        <ProductCard key={p.id} product={p} index={i} />
                    ))}
                </div>
             </div>
        </section>
    );
};

export default MarketplacePreview;