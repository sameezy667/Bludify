import React from 'react';
import { ShieldCheck, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-100 dark:bg-surface-0 border-t border-gray-200 dark:border-surface-3 pt-16 pb-8 transition-colors duration-300">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <ShieldCheck className="w-6 h-6 text-neon" />
                            <span className="font-medium text-xl text-gray-900 dark:text-white transition-colors">BLUDIFY</span>
                        </div>
                        <p className="text-gray-600 dark:text-text-muted max-w-sm mb-6 font-light transition-colors">
                            The secure layer for the secondary electronics market. 
                            We replace uncertainty with code, verification, and escrow.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                                <a key={i} href="#" className="p-2 rounded-full bg-white dark:bg-surface-1 border border-gray-200 dark:border-surface-3 text-gray-500 dark:text-text-muted hover:text-black dark:hover:text-white hover:border-gray-400 dark:hover:border-white transition-all">
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-gray-900 dark:text-white font-medium mb-6 transition-colors">Platform</h4>
                        <ul className="space-y-4 text-sm text-gray-600 dark:text-text-muted">
                            <li><a href="#" className="hover:text-neon transition-colors">Marketplace</a></li>
                            <li><a href="#" className="hover:text-neon transition-colors">Sell Device</a></li>
                            <li><a href="#" className="hover:text-neon transition-colors">Verification Standards</a></li>
                            <li><a href="#" className="hover:text-neon transition-colors">Pricing</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-gray-900 dark:text-white font-medium mb-6 transition-colors">Company</h4>
                        <ul className="space-y-4 text-sm text-gray-600 dark:text-text-muted">
                            <li><a href="#" className="hover:text-neon transition-colors">Manifesto</a></li>
                            <li><a href="#" className="hover:text-neon transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-neon transition-colors">Support</a></li>
                            <li><a href="#" className="hover:text-neon transition-colors">Legal</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-200 dark:border-surface-3 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-text-muted font-mono transition-colors">
                    <div>© 2024 Bludify Inc. Secure Marketplace.</div>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-neon"></span>
                        SYSTEMS OPERATIONAL
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;