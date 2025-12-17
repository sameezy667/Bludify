/**
 * SellDevice.tsx
 * 
 * Seller onboarding and information page.
 * Guides potential sellers through the process of listing devices on the platform.
 * 
 * Page Structure:
 * - Hero section with title and value proposition
 * - 4-step selling process visualization
 * - Feature benefits grid
 * - Integrated PricingTable component showing seller tier options
 * 
 * Dependencies:
 * - framer-motion: Section entrance animations
 * - lucide-react: Icon components for steps and features
 * - ../components/PricingTable: Pricing tier display
 * 
 * NOTE: All monetary values should come from configuration
 * TODO: Add FAQ section for common seller questions
 * TODO: Implement seller registration flow
 * TODO: Connect to backend for actual device listing
 */
import React from 'react';
import { motion } from 'framer-motion';
import { Package, ShieldCheck, DollarSign, Clock, CheckCircle2, Upload } from 'lucide-react';
import PricingTable from '../components/PricingTable';

/**
 * Seller onboarding page component.
 * 
 * @returns {JSX.Element} The complete sell device page layout
 */
const SellDevice: React.FC = () => {
    const steps = [
        {
            icon: Upload,
            title: "List Your Device",
            description: "Create a listing with photos and details. We'll verify everything before it goes live."
        },
        {
            icon: ShieldCheck,
            title: "We Verify",
            description: "Our experts inspect your device thoroughly. Battery health, authenticity, and condition checks."
        },
        {
            icon: DollarSign,
            title: "Get Paid Securely",
            description: "Funds held in escrow until buyer confirms. No fraud, no chargebacks, no worries."
        },
        {
            icon: CheckCircle2,
            title: "Ship & Done",
            description: "Pack it up, ship it out. We handle the rest, including buyer protection."
        }
    ];

    return (
        <section className="min-h-screen pt-32 pb-20 transition-colors duration-300">
            {/* Hero */}
            <div className="container mx-auto px-6 lg:px-12 mb-20">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/5 dark:border-surface-3 bg-white/50 dark:bg-white/5 backdrop-blur text-slate-500 dark:text-text-muted text-[11px] font-mono tracking-wider uppercase transition-colors shadow-sm mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
                        Start Earning
                    </div>
                    
                    <h1 className="text-4xl md:text-6xl font-medium text-gray-900 dark:text-white mb-6 transition-colors">
                        Sell Your Tech.<br />Keep the Value.
                    </h1>
                    
                    <p className="text-lg text-gray-600 dark:text-text-muted mb-8 transition-colors">
                        List your pre-owned devices on Bludify's secure marketplace. We handle verification, escrow, and buyer trust. You just ship and get paid.
                    </p>
                    
                    <button className="px-8 py-4 bg-neon hover:bg-neon/90 text-[#050505] font-semibold rounded-full transition-all shadow-[0_0_20px_rgba(0,224,143,0.2)] text-lg">
                        List Your First Device
                    </button>
                </motion.div>
            </div>

            {/* How It Works */}
            <div className="bg-gray-50 dark:bg-surface-0 border-y border-gray-200 dark:border-surface-3/30 py-20 transition-colors duration-300">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-medium text-gray-900 dark:text-white mb-4 transition-colors">
                            How Selling Works
                        </h2>
                        <p className="text-gray-600 dark:text-text-muted transition-colors">
                            Four simple steps to turn your old tech into cash
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative bg-white dark:bg-surface-1 rounded-xl p-6 border border-gray-200 dark:border-surface-3 shadow-sm dark:shadow-none transition-colors"
                            >
                                <div className="w-12 h-12 rounded-full bg-neon/10 flex items-center justify-center mb-4">
                                    <step.icon className="w-6 h-6 text-neon" />
                                </div>
                                
                                <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-gray-100 dark:bg-surface-2 flex items-center justify-center text-sm font-bold text-gray-400 dark:text-text-muted transition-colors">
                                    {index + 1}
                                </div>
                                
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2 transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-text-muted transition-colors">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Features Grid */}
            <div className="container mx-auto px-6 lg:px-12 py-20">
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <div className="text-center">
                        <div className="w-16 h-16 rounded-2xl bg-neon/10 flex items-center justify-center mx-auto mb-4">
                            <Package className="w-8 h-8 text-neon" />
                        </div>
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2 transition-colors">
                            Free Shipping Kit
                        </h3>
                        <p className="text-gray-600 dark:text-text-muted transition-colors">
                            We send you packaging materials and a prepaid label. Just pack and drop off.
                        </p>
                    </div>
                    
                    <div className="text-center">
                        <div className="w-16 h-16 rounded-2xl bg-neon/10 flex items-center justify-center mx-auto mb-4">
                            <Clock className="w-8 h-8 text-neon" />
                        </div>
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2 transition-colors">
                            Fast Payouts
                        </h3>
                        <p className="text-gray-600 dark:text-text-muted transition-colors">
                            Get paid within 24 hours of buyer confirmation. Direct to your bank account.
                        </p>
                    </div>
                    
                    <div className="text-center">
                        <div className="w-16 h-16 rounded-2xl bg-neon/10 flex items-center justify-center mx-auto mb-4">
                            <ShieldCheck className="w-8 h-8 text-neon" />
                        </div>
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2 transition-colors">
                            Seller Protection
                        </h3>
                        <p className="text-gray-600 dark:text-text-muted transition-colors">
                            No scams, no fake buyers. Every transaction is verified and insured.
                        </p>
                    </div>
                </div>
            </div>

            {/* Pricing Table */}
            <PricingTable />

            {/* CTA */}
            <div className="container mx-auto px-6 lg:px-12 mt-20">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-neon/10 to-neon/5 border border-neon/20 rounded-3xl p-12 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-medium text-gray-900 dark:text-white mb-4 transition-colors">
                        Ready to Start Selling?
                    </h2>
                    <p className="text-gray-600 dark:text-text-muted mb-8 text-lg transition-colors">
                        Join thousands of sellers who trust Bludify for secure transactions
                    </p>
                    <button className="px-8 py-4 bg-neon hover:bg-neon/90 text-[#050505] font-semibold rounded-full transition-all shadow-[0_0_20px_rgba(0,224,143,0.2)]">
                        Create Seller Account
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default SellDevice;
