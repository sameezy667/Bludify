import React from 'react';
import { TrendingUp } from 'lucide-react';

const items = [
    { name: "iPhone 14 Pro", price: "₹82,000", trend: "+2.4%" },
    { name: "MacBook Air M2", price: "₹74,500", trend: "+1.1%" },
    { name: "Sony A7IV", price: "₹1,85,000", trend: "+0.5%" },
    { name: "iPad Pro 12.9", price: "₹68,000", trend: "-0.2%" },
    { name: "Samsung S23 Ultra", price: "₹79,000", trend: "+3.1%" },
    { name: "AirPods Max", price: "₹38,000", trend: "+0.8%" },
    { name: "RTX 4090", price: "₹1,45,000", trend: "-1.5%" },
];

const MarketTicker: React.FC = () => {
    return (
        <div className="w-full bg-white dark:bg-surface-1 border-y border-gray-200 dark:border-surface-3 py-3 overflow-hidden flex items-center transition-colors duration-300">
            <div className="flex items-center gap-4 px-6 border-r border-gray-200 dark:border-surface-3 bg-white dark:bg-surface-1 z-10 transition-colors duration-300">
                <div className="w-2 h-2 rounded-full bg-neon animate-pulse" />
                <span className="text-xs font-mono text-neon uppercase tracking-widest whitespace-nowrap">Live Market</span>
            </div>
            
            <div className="flex animate-scroll whitespace-nowrap">
                {[...items, ...items, ...items].map((item, i) => (
                    <div key={i} className="flex items-center gap-6 px-8 border-r border-gray-100 dark:border-surface-3/30 group cursor-pointer hover:bg-gray-50 dark:hover:bg-surface-2 transition-colors">
                        <span className="text-sm text-gray-600 dark:text-text-muted font-medium transition-colors">{item.name}</span>
                        <div className="flex items-center gap-2">
                             <span className="text-sm text-gray-900 dark:text-white font-mono transition-colors">{item.price}</span>
                             <span className={`text-xs font-mono flex items-center ${item.trend.startsWith('+') ? 'text-neon' : 'text-red-500'}`}>
                                {item.trend.startsWith('+') && <TrendingUp className="w-3 h-3 mr-1" />}
                                {item.trend}
                             </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MarketTicker;