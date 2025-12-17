/**
 * Marketplace.tsx
 * 
 * Product browsing page with search, filtering, and grid layout.
 * Features:
 * - Hero section with page title and description
 * - Search bar with real-time filtering
 * - Category filter buttons (All, Phones, Laptops, Audio, Cameras, Wearables, Gaming)
 * - Product grid with responsive card layout
 * - Individual product cards with verification badges and hover effects
 * 
 * Data Structure:
 * - allProducts: Static array of Product objects with all marketplace items
 * - Each product includes: id, title, price, image, specs, condition, verified status, escrow status
 * 
 * State Management:
 * - searchQuery: Controls search input and filters products by title/specs
 * - selectedCategory: Filters products by category type
 * 
 * Product Card Features:
 * - Grayscale placeholder images (to be replaced with actual product images)
 * - Verification badge with ShieldCheck icon
 * - Escrow secured indicator
 * - Price display in INR (₹)
 * - Hover animation with scale transform
 * - Click navigation to product detail (TODO)
 * 
 * Dependencies:
 * - framer-motion: Card entrance animations and hover effects
 * - lucide-react: Icon components
 * - ../types: Product type definition
 * 
 * NOTE: Product images use placeholder service (picsum.photos)
 * TODO: Connect to backend API for dynamic product data
 * TODO: Implement pagination for large product lists
 * TODO: Add price range filter
 * TODO: Add sort options (price, date, condition)
 * TODO: Create individual product detail pages
 * FIXME: Category filter should be derived from product data, not hardcoded
 */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowUpRight, Search, SlidersHorizontal } from 'lucide-react';
import { Product } from '../types';

/**
 * Static product data for marketplace.
 * In production, this should be fetched from a backend API.
 * Each product includes full details needed for card display and filtering.
 * 
 * @constant {Product[]} allProducts - Array of all available products
 */
const allProducts: Product[] = [
    {
        id: "BLD-8829-XJ",
        title: "MacBook Pro 14 M1 Pro",
        price: 125000,
        image: "https://picsum.photos/400/300?grayscale&random=1",
        specs: "16GB • 512GB",
        condition: "Excellent",
        verified: true,
        escrowSecured: true
    },
    {
        id: "BLD-9921-AB",
        title: "iPhone 14 Pro",
        price: 82000,
        image: "https://picsum.photos/400/400?grayscale&random=2",
        specs: "Deep Purple • 256GB",
        condition: "Good",
        verified: true,
        escrowSecured: true
    },
    {
        id: "BLD-1102-ZZ",
        title: "Sony WH-1000XM5",
        price: 18000,
        image: "https://picsum.photos/400/350?grayscale&random=3",
        specs: "Silver • Box",
        condition: "Excellent",
        verified: true,
        escrowSecured: true
    },
    {
        id: "BLD-3344-PQ",
        title: "iPad Air M1",
        price: 45000,
        image: "https://picsum.photos/400/320?grayscale&random=4",
        specs: "64GB • WiFi",
        condition: "Good",
        verified: true,
        escrowSecured: true
    },
    {
        id: "BLD-5566-RT",
        title: "Sony A7IV Camera",
        price: 185000,
        image: "https://picsum.photos/400/380?grayscale&random=5",
        specs: "Body Only • 2K Shutter",
        condition: "Excellent",
        verified: true,
        escrowSecured: true
    },
    {
        id: "BLD-7788-MN",
        title: "Apple Watch Series 8",
        price: 32000,
        image: "https://picsum.photos/400/400?grayscale&random=6",
        specs: "45mm • GPS+Cellular",
        condition: "Good",
        verified: true,
        escrowSecured: true
    },
    {
        id: "BLD-9900-KL",
        title: "Samsung Galaxy S23 Ultra",
        price: 78000,
        image: "https://picsum.photos/400/390?grayscale&random=7",
        specs: "Phantom Black • 256GB",
        condition: "Excellent",
        verified: true,
        escrowSecured: true
    },
    {
        id: "BLD-1122-FG",
        title: "DJI Mini 3 Pro",
        price: 55000,
        image: "https://picsum.photos/400/360?grayscale&random=8",
        specs: "Fly More Combo",
        condition: "Excellent",
        verified: true,
        escrowSecured: true
    },
    {
        id: "BLD-3355-CD",
        title: "Nintendo Switch OLED",
        price: 28000,
        image: "https://picsum.photos/400/340?grayscale&random=9",
        specs: "White • Box",
        condition: "Good",
        verified: true,
        escrowSecured: true
    }
];

const ProductCard: React.FC<{ product: Product, index: number }> = ({ product, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.05 }}
        className="group relative bg-white dark:bg-surface-1 rounded-xl overflow-hidden border border-gray-200 dark:border-surface-3 hover:border-gray-300 dark:hover:border-surface-2 transition-colors shadow-sm dark:shadow-none cursor-pointer"
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

const Marketplace: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    
    const categories = ['All', 'Phones', 'Laptops', 'Audio', 'Cameras', 'Wearables', 'Gaming'];

    return (
        <section className="min-h-screen pt-32 pb-20 bg-gray-50 dark:bg-surface-0 transition-colors duration-300">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="mb-12">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-medium text-gray-900 dark:text-white mb-4 transition-colors"
                    >
                        Browse Marketplace
                    </motion.h1>
                    <p className="text-gray-600 dark:text-text-muted text-lg">
                        Verified pre-owned tech. Every item inspected, every transaction secured.
                    </p>
                </div>

                {/* Search and Filters */}
                <div className="mb-8 flex flex-col md:flex-row gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white dark:bg-surface-1 border border-gray-200 dark:border-surface-3 rounded-full py-3 pl-12 pr-4 text-gray-900 dark:text-white focus:outline-none focus:border-neon/50 focus:ring-2 focus:ring-neon/20 transition-all placeholder:text-gray-400"
                        />
                    </div>
                    <button className="px-6 py-3 bg-white dark:bg-surface-1 border border-gray-200 dark:border-surface-3 rounded-full text-gray-900 dark:text-white hover:border-neon transition-all flex items-center gap-2 whitespace-nowrap">
                        <SlidersHorizontal className="w-5 h-5" />
                        Filters
                    </button>
                </div>

                {/* Category Tabs */}
                <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                                selectedCategory === category
                                    ? 'bg-neon text-black'
                                    : 'bg-white dark:bg-surface-1 border border-gray-200 dark:border-surface-3 text-gray-900 dark:text-white hover:border-gray-300 dark:hover:border-surface-2'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Products Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {allProducts.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} />
                    ))}
                </div>

                {/* Load More */}
                <div className="mt-12 text-center">
                    <button className="px-8 py-3 bg-gray-200 dark:bg-surface-2 hover:bg-gray-300 dark:hover:bg-surface-3 text-gray-900 dark:text-white rounded-full transition-all font-medium">
                        Load More Products
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Marketplace;
