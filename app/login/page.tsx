/**
 * app/login/page.tsx
 * 
 * User authentication page with login and signup forms.
 * Features:
 * - Toggle between Login and Sign Up modes
 * - Email and password input fields
 * - Conditional name field for signup
 * - Trust badges at bottom
 */
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, User, ShieldCheck } from 'lucide-react';

export default function Login() {
    const [isLogin, setIsLogin] = useState<boolean>(true);

    return (
        <section className="min-h-screen pt-32 pb-20 flex items-center justify-center transition-colors duration-300">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="max-w-md mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-8"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-neon/10 flex items-center justify-center mx-auto mb-4">
                            <ShieldCheck className="w-8 h-8 text-neon" />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-medium text-gray-900 dark:text-white mb-2 transition-colors">
                            {isLogin ? 'Welcome Back' : 'Join Bludify'}
                        </h1>
                        <p className="text-gray-600 dark:text-text-muted transition-colors">
                            {isLogin ? 'Sign in to your account' : 'Create your secure account'}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white dark:bg-surface-1 rounded-2xl border border-gray-200 dark:border-surface-3 p-8 shadow-sm dark:shadow-none transition-colors"
                    >
                        <form className="space-y-6">
                            {!isLogin && (
                                <div>
                                    <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2 transition-colors">
                                        Full Name
                                    </label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full bg-gray-50 dark:bg-surface-2 border border-gray-200 dark:border-surface-3 rounded-lg py-3 pl-12 pr-4 text-gray-900 dark:text-white focus:outline-none focus:border-neon/50 focus:ring-2 focus:ring-neon/20 transition-all placeholder:text-gray-400"
                                        />
                                    </div>
                                </div>
                            )}

                            <div>
                                <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2 transition-colors">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="email"
                                        placeholder="you@example.com"
                                        className="w-full bg-gray-50 dark:bg-surface-2 border border-gray-200 dark:border-surface-3 rounded-lg py-3 pl-12 pr-4 text-gray-900 dark:text-white focus:outline-none focus:border-neon/50 focus:ring-2 focus:ring-neon/20 transition-all placeholder:text-gray-400"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2 transition-colors">
                                    Password
                                </label>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        className="w-full bg-gray-50 dark:bg-surface-2 border border-gray-200 dark:border-surface-3 rounded-lg py-3 pl-12 pr-4 text-gray-900 dark:text-white focus:outline-none focus:border-neon/50 focus:ring-2 focus:ring-neon/20 transition-all placeholder:text-gray-400"
                                    />
                                </div>
                            </div>

                            {isLogin && (
                                <div className="flex items-center justify-between text-sm">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox" className="rounded border-gray-300 text-neon focus:ring-neon" />
                                        <span className="text-gray-600 dark:text-text-muted transition-colors">Remember me</span>
                                    </label>
                                    <a href="#" className="text-neon hover:text-neon/80 transition-colors">
                                        Forgot password?
                                    </a>
                                </div>
                            )}

                            <button
                                type="submit"
                                className="w-full py-3 bg-neon hover:bg-neon/90 text-[#050505] font-semibold rounded-lg transition-all shadow-[0_0_20px_rgba(0,224,143,0.2)]"
                            >
                                {isLogin ? 'Sign In' : 'Create Account'}
                            </button>
                        </form>

                        <div className="mt-6 text-center">
                            <button
                                onClick={() => setIsLogin(!isLogin)}
                                className="text-sm text-gray-600 dark:text-text-muted hover:text-gray-900 dark:hover:text-white transition-colors"
                            >
                                {isLogin ? "Don't have an account? " : "Already have an account? "}
                                <span className="text-neon font-medium">
                                    {isLogin ? 'Sign Up' : 'Sign In'}
                                </span>
                            </button>
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-surface-3">
                            <p className="text-xs text-center text-gray-500 dark:text-text-muted transition-colors">
                                By continuing, you agree to Bludify's Terms of Service and Privacy Policy
                            </p>
                        </div>
                    </motion.div>

                    {/* Trust Badges */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mt-8 flex items-center justify-center gap-6 text-xs text-gray-500 dark:text-text-muted"
                    >
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-neon" />
                            <span>Secure Login</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Lock className="w-4 h-4 text-neon" />
                            <span>Encrypted</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
