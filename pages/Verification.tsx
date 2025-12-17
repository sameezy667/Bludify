/**
 * Verification.tsx
 * 
 * Page explaining Bludify's verification standards and trust protocol.
 * Builds buyer confidence by transparently showing the verification process.
 * 
 * Page Structure:
 * - Hero section introducing verification importance
 * - 6 verification checkpoint categories with detailed descriptions
 * - Verification scoring system (Basic/Advanced/Premium tiers)
 * - Integrated ProtocolSection showing 3-step verification flow
 * 
 * Verification Checkpoints:
 * 1. Hardware Integrity: Physical condition and component authenticity
 * 2. Battery Health: Capacity testing and charge cycle analysis
 * 3. Connectivity: WiFi, Bluetooth, cellular, NFC functionality
 * 4. Sensor Suite: Camera, accelerometer, gyroscope, proximity sensors
 * 5. Authenticity: IMEI verification and OEM part validation
 * 6. Security: Activation lock, Find My Device status, data wipe confirmation
 * 
 * Scoring System:
 * - Basic (80-84): Essential checks passed, minor cosmetic issues
 * - Advanced (85-94): Comprehensive testing, good condition
 * - Premium (95-100): Flawless condition, all tests exceeded expectations
 * 
 * Dependencies:
 * - framer-motion: Stagger animations for checkpoint cards
 * - lucide-react: Icon components for each checkpoint category
 * - ../components/ProtocolSection: Visualization of verification workflow
 * 
 * NOTE: Checkpoint descriptions should be detailed enough for buyer confidence
 * TODO: Add video demonstration of verification process
 * TODO: Link to detailed verification methodology document
 * TODO: Show example verification reports
 * FIXME: Score ranges should come from backend configuration
 */
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Battery, Wifi, Fingerprint, Shield, CheckCircle } from 'lucide-react';
import ProtocolSection from '../components/ProtocolSection';

/**
 * Verification standards page component.
 * Educates users on the comprehensive verification process.
 * 
 * @returns {JSX.Element} The complete verification page layout
 */
const Verification: React.FC = () => {
    const checkpoints = [
        {
            icon: Cpu,
            title: "Hardware Diagnostics",
            checks: ["Processor Performance", "RAM Integrity", "Storage Health", "Thermal Sensors"],
            description: "Deep hardware scan to ensure all components function at optimal levels."
        },
        {
            icon: Battery,
            title: "Battery Analysis",
            checks: ["Cycle Count", "Maximum Capacity", "Charge Retention", "Health Status"],
            description: "Comprehensive battery health check to verify longevity and performance."
        },
        {
            icon: Wifi,
            title: "Connectivity Tests",
            checks: ["WiFi Signal", "Bluetooth", "Cellular Bands", "GPS Accuracy"],
            description: "All wireless features tested for proper connectivity and range."
        },
        {
            icon: Camera,
            title: "Sensor Validation",
            checks: ["Camera Quality", "Microphone", "Speakers", "Face ID/Touch ID"],
            description: "Every sensor calibrated and tested for accuracy and responsiveness."
        },
        {
            icon: Shield,
            title: "Authenticity Check",
            checks: ["Serial Number", "Parts Origin", "Region Lock", "Warranty Status"],
            description: "Verify device authenticity and detect any non-genuine components."
        },
        {
            icon: Lock,
            title: "Security Audit",
            checks: ["Activation Lock", "Find My Device", "Knox/Root Status", "Carrier Lock"],
            description: "Ensure device is ready for transfer with no security locks enabled."
        }
    ];

    const verificationLevels = [
        {
            level: "Basic",
            score: "80-84",
            color: "text-yellow-500",
            description: "Essential checks passed. Minor cosmetic issues or wear.",
            badge: "Good"
        },
        {
            level: "Advanced",
            score: "85-94",
            color: "text-blue-500",
            description: "Comprehensive verification. Excellent working condition.",
            badge: "Very Good"
        },
        {
            level: "Premium",
            score: "95-100",
            color: "text-neon",
            description: "Every test passed with flying colors. Like-new condition.",
            badge: "Excellent"
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
                        <Shield className="w-3 h-3 text-neon" />
                        Trust Protocol
                    </div>
                    
                    <h1 className="text-4xl md:text-6xl font-medium text-gray-900 dark:text-white mb-6 transition-colors">
                        Verification Standards
                    </h1>
                    
                    <p className="text-lg text-gray-600 dark:text-text-muted mb-8 transition-colors">
                        Every device on Bludify undergoes a rigorous 50+ point inspection. We don't just check if it works—we verify everything down to the component level.
                    </p>
                </motion.div>
            </div>

            {/* Checkpoints Grid */}
            <div className="bg-gray-50 dark:bg-surface-0 border-y border-gray-200 dark:border-surface-3/30 py-20 transition-colors duration-300">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-medium text-gray-900 dark:text-white mb-4 transition-colors">
                            Verification Checkpoints
                        </h2>
                        <p className="text-gray-600 dark:text-text-muted transition-colors">
                            Six comprehensive categories, 50+ individual tests
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {checkpoints.map((checkpoint, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white dark:bg-surface-1 rounded-xl p-6 border border-gray-200 dark:border-surface-3 hover:border-neon/50 transition-all shadow-sm dark:shadow-none"
                            >
                                <div className="w-12 h-12 rounded-xl bg-neon/10 flex items-center justify-center mb-4">
                                    <checkpoint.icon className="w-6 h-6 text-neon" />
                                </div>
                                
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2 transition-colors">
                                    {checkpoint.title}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-text-muted mb-4 transition-colors">
                                    {checkpoint.description}
                                </p>
                                
                                <ul className="space-y-2">
                                    {checkpoint.checks.map((check, i) => (
                                        <li key={i} className="flex items-center gap-2 text-xs text-gray-600 dark:text-text-muted transition-colors">
                                            <CheckCircle2 className="w-3 h-3 text-neon" />
                                            {check}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Verification Levels */}
            <div className="container mx-auto px-6 lg:px-12 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-medium text-gray-900 dark:text-white mb-4 transition-colors">
                        Verification Scores
                    </h2>
                    <p className="text-gray-600 dark:text-text-muted transition-colors">
                        Understanding our rating system
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {verificationLevels.map((level, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-surface-1 rounded-xl p-8 border border-gray-200 dark:border-surface-3 text-center shadow-sm dark:shadow-none transition-colors"
                        >
                            <div className={`text-5xl font-bold mb-2 ${level.color}`}>
                                {level.score}
                            </div>
                            <div className="text-sm font-mono uppercase tracking-wider text-gray-500 dark:text-text-muted mb-4 transition-colors">
                                {level.level} Verification
                            </div>
                            <div className="inline-block px-3 py-1 rounded-full bg-gray-100 dark:bg-surface-2 text-xs font-medium text-gray-900 dark:text-white mb-4 transition-colors">
                                {level.badge}
                            </div>
                            <p className="text-sm text-gray-600 dark:text-text-muted transition-colors">
                                {level.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Protocol Section */}
            <ProtocolSection />

            {/* What We Check For */}
            <div className="container mx-auto px-6 lg:px-12 py-20">
                <div className="bg-white dark:bg-surface-1 rounded-3xl border border-gray-200 dark:border-surface-3 p-12 shadow-sm dark:shadow-none transition-colors">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-6 transition-colors flex items-center gap-3">
                                <CheckCircle2 className="w-6 h-6 text-neon" />
                                We Look For
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    "Original, genuine components",
                                    "Clean device history (no theft reports)",
                                    "Full functionality across all features",
                                    "Good battery health (>80%)",
                                    "No water damage or corrosion",
                                    "Proper network compatibility"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-text-muted transition-colors">
                                        <div className="w-5 h-5 rounded-full bg-neon/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                                            <CheckCircle2 className="w-3 h-3 text-neon" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-6 transition-colors flex items-center gap-3">
                                <XCircle className="w-6 h-6 text-red-500" />
                                Automatic Rejection
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    "Activation locks enabled",
                                    "Major screen cracks or damage",
                                    "Non-functional core features",
                                    "Fake or refurbished parts",
                                    "Blacklisted IMEI/serial numbers",
                                    "Severe battery degradation (<70%)"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-text-muted transition-colors">
                                        <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                                            <XCircle className="w-3 h-3 text-red-500" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="container mx-auto px-6 lg:px-12">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-neon/10 to-neon/5 border border-neon/20 rounded-3xl p-12 text-center"
                >
                    <Shield className="w-16 h-16 text-neon mx-auto mb-6" />
                    <h2 className="text-3xl md:text-4xl font-medium text-gray-900 dark:text-white mb-4 transition-colors">
                        Trust, Verified by Code
                    </h2>
                    <p className="text-gray-600 dark:text-text-muted mb-8 text-lg transition-colors max-w-2xl mx-auto">
                        Every device sold on Bludify carries our verification seal. Buy with confidence, sell with protection.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Verification;
