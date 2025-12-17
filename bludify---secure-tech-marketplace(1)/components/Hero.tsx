import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Battery, ScanLine, Check, Lock, Wifi } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { RoundedBox, Float, ContactShadows, Cylinder, Html } from '@react-three/drei';
import * as THREE from 'three';

// --- 3D Component: Phone Layers ---

const PhoneLayers = () => {
  const group = useRef<THREE.Group>(null);
  const [hovered, setHover] = useState(false);
  const scanLineRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (group.current) {
      const t = state.clock.getElapsedTime();
      
      // Idle Rotation + Mouse Interaction
      group.current.rotation.y = THREE.MathUtils.lerp(
          group.current.rotation.y, 
          (state.pointer.x * 0.4) + Math.sin(t * 0.2) * 0.1, 
          0.05
      );
      group.current.rotation.x = THREE.MathUtils.lerp(
          group.current.rotation.x, 
          (-state.pointer.y * 0.4) + Math.cos(t * 0.2) * 0.05, 
          0.05
      );
      
      // Hover Expansion Animation
      const targetExpansion = hovered ? 0.8 : 0.08; 
      const speed = 4 * delta;
      const layers = group.current.children;

      if (layers.length >= 3) {
          // Back Panel
          layers[0].position.z = THREE.MathUtils.lerp(layers[0].position.z, -targetExpansion, speed);
          // Middle Chassis
          layers[1].position.z = THREE.MathUtils.lerp(layers[1].position.z, 0, speed);
          // Front Screen
          layers[2].position.z = THREE.MathUtils.lerp(layers[2].position.z, targetExpansion, speed);
      }
    }

    // Scan Line Animation
    if (scanLineRef.current) {
        const t = state.clock.getElapsedTime();
        scanLineRef.current.position.y = Math.sin(t * 1.5) * 2.5;
    }
  });

  // --- Materials ---
  
  // Gunmetal / Dark Titanium finish - Visible on white and black backgrounds
  const frameMaterial = new THREE.MeshStandardMaterial({
    color: "#52525b", // Zinc-600 (Gunmetal)
    metalness: 0.95,
    roughness: 0.15,
  });

  // Back Glass (Matte)
  const backGlassMaterial = new THREE.MeshPhysicalMaterial({
    color: "#18181b", // Zinc-900
    metalness: 0.2,
    roughness: 0.7, // Matte
    clearcoat: 0.5,
    clearcoatRoughness: 0.1,
  });

  // Screen Glass (Glossy + Deep Black)
  const screenMaterial = new THREE.MeshPhysicalMaterial({
    color: "#050505",
    metalness: 0.8,
    roughness: 0.1,
    transmission: 0, 
    clearcoat: 1,
  });

  const neonEmissive = new THREE.MeshStandardMaterial({
      color: "#00E08F",
      emissive: "#00E08F",
      emissiveIntensity: 2,
      toneMapped: false
  });

  return (
    <group 
        ref={group} 
        rotation={[0, 0, 0]} 
        scale={0.5} 
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
    >
      {/* --- Layer 1: Back Panel (Smooth Back Glass) --- */}
      <group position={[0, 0, -0.15]}>
        <RoundedBox args={[3.0, 6.2, 0.1]} radius={0.4} smoothness={4}>
            <primitive object={backGlassMaterial} />
        </RoundedBox>
      </group>

      {/* --- Layer 2: Chassis (Frame + Buttons + Battery) --- */}
      <group position={[0, 0, 0]}>
         {/* Main Metal Frame */}
         <RoundedBox args={[3.05, 6.25, 0.25]} radius={0.45} smoothness={4}>
            <primitive object={frameMaterial} />
         </RoundedBox>
         
         {/* Buttons - Right Side (Power) */}
         <mesh position={[1.52, 1.0, 0]}>
             <boxGeometry args={[0.08, 0.8, 0.1]} />
             <primitive object={frameMaterial} />
         </mesh>

         {/* Buttons - Left Side (Volume) */}
         <mesh position={[-1.52, 1.5, 0]}>
             <boxGeometry args={[0.08, 0.4, 0.1]} />
             <primitive object={frameMaterial} />
         </mesh>
         <mesh position={[-1.52, 0.8, 0]}>
             <boxGeometry args={[0.08, 0.4, 0.1]} />
             <primitive object={frameMaterial} />
         </mesh>

         {/* Internal Battery Graphic (Visible when exploded) */}
         <RoundedBox args={[1.8, 3.5, 0.26]} position={[0, -0.2, 0]} radius={0.1}>
            <meshStandardMaterial color="#050505" />
            {/* Logo on battery */}
             <Html position={[0, 0, 0.14]} transform scale={0.5} style={{pointerEvents:'none'}}>
                 <div className="flex flex-col items-center opacity-40">
                    <ShieldCheck size={24} className="text-white" />
                 </div>
             </Html>
         </RoundedBox>
      </group>

      {/* --- Layer 3: Screen (Display + Dynamic Island + Scan) --- */}
      <group position={[0, 0, 0.15]}>
         {/* Glass Panel */}
         <RoundedBox args={[2.95, 6.15, 0.05]} radius={0.4} smoothness={4}>
             <primitive object={screenMaterial} />
         </RoundedBox>

         {/* Screen Border/Bezel (Black) */}
         <RoundedBox args={[2.85, 6.05, 0.06]} radius={0.35}>
             <meshBasicMaterial color="#000" />
         </RoundedBox>

         {/* UI Placeholder: "On" State */}
         <group position={[0, 0, 0.04]}>
            {/* Dynamic Island */}
            <RoundedBox args={[0.8, 0.25, 0.01]} position={[0, 2.7, 0]} radius={0.12}>
                <meshBasicMaterial color="#000" />
            </RoundedBox>
            
            {/* Time / UI elements to make it look like a phone */}
            <Html position={[0, 1.5, 0]} transform scale={0.4} style={{pointerEvents: 'none'}} className="select-none">
                <div className="text-center font-sans">
                    <div className="text-white/30 text-5xl font-light tracking-tighter">10:42</div>
                    <div className="text-white/20 text-xs mt-2 font-medium tracking-widest uppercase">Verified System</div>
                </div>
            </Html>
            
            {/* Bottom App Icons Placeholder */}
            <Html position={[0, -2.5, 0]} transform scale={0.4} style={{pointerEvents: 'none'}} className="select-none">
                <div className="flex gap-4 opacity-20">
                     <div className="w-10 h-10 rounded-xl bg-white" />
                     <div className="w-10 h-10 rounded-xl bg-white" />
                     <div className="w-10 h-10 rounded-xl bg-white" />
                </div>
            </Html>
         </group>
         
         {/* Scan Line - Wider and Glowier */}
         <mesh ref={scanLineRef} position={[0, 0, 0.05]}>
             <boxGeometry args={[2.8, 0.02, 0.01]} />
             <primitive object={neonEmissive} />
         </mesh>
      </group>
    </group>
  );
};

// --- Component: Wireframe Phone Container ---

const WireframePhone: React.FC = () => {
    return (
        <div className="relative w-[300px] h-[540px] lg:w-[360px] lg:h-[640px] z-20 cursor-pointer">
            <Canvas camera={{ position: [0, 0, 8], fov: 35 }} dpr={[1, 2]}>
                <ambientLight intensity={0.8} />
                <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={1.5} color="#ffffff" />
                {/* Highlights for the metal frame */}
                <spotLight position={[-10, 5, -5]} angle={0.5} intensity={5} color="#ffffff" /> 
                <pointLight position={[0, -5, 5]} intensity={0.5} color="#00E08F" />
                
                <Float speed={2} rotationIntensity={0.2} floatIntensity={0.2}>
                    <PhoneLayers />
                </Float>
                
                <ContactShadows position={[0, -3.5, 0]} opacity={0.4} scale={15} blur={2} color="#000" />
            </Canvas>
            
            <div className="absolute bottom-8 right-0 left-0 flex justify-center pointer-events-none">
                 <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="bg-black/90 backdrop-blur border border-white/10 px-4 py-2 rounded-full flex items-center gap-2 shadow-2xl"
                >
                    <ShieldCheck className="w-3 h-3 text-neon" />
                    <span className="text-[10px] font-mono text-white tracking-[0.2em] uppercase">System Secure</span>
                </motion.div>
            </div>
        </div>
    );
}

// --- Component: Verification Flow UI ---

const VerificationFlow: React.FC = () => {
    return (
        <div className="relative w-full h-[540px] lg:h-[640px] bg-white dark:bg-[#020202] rounded-3xl border border-black/5 dark:border-[#1A1A1A] flex items-center justify-center shadow-xl dark:shadow-2xl overflow-hidden group transition-colors duration-300">
            {/* Status Badge */}
            <div className="absolute top-6 left-6 lg:top-8 lg:left-8 flex items-center gap-3 px-4 py-2 rounded-full border border-neon/20 bg-neon/5 shadow-[0_0_15px_rgba(0,224,143,0.05)] z-20 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-neon animate-pulse shadow-[0_0_8px_#00E08F]" />
                <span className="text-neon font-mono text-xs tracking-widest font-bold">VERIFICATION ACTIVE</span>
            </div>

            {/* Main Content Grid */}
            <div className="relative z-10 w-full max-w-[95%] lg:max-w-5xl grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-0">
                
                {/* 1. Phone Section */}
                <div className="flex justify-center md:justify-end md:pr-4 relative perspective-1000">
                    <WireframePhone />
                </div>

                {/* 2. Connection Logic (Scanner + Lines) */}
                <div className="relative hidden md:flex items-center justify-center w-24 lg:w-40 h-full">
                    <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
                        <defs>
                            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#00E08F" stopOpacity="0.1" />
                                <stop offset="50%" stopColor="#00E08F" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="#00E08F" stopOpacity="0.8" />
                            </linearGradient>
                        </defs>
                        
                        {/* Connecting Lines */}
                        <motion.line 
                            x1="-40" y1="50%" x2="50%" y2="50%" 
                            stroke="url(#lineGradient)" strokeWidth="1.5"
                            strokeDasharray="4 4"
                            initial={{ strokeDashoffset: 0 }}
                            animate={{ strokeDashoffset: -20 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />

                        <motion.line 
                            x1="50%" y1="50%" x2="85%" y2="50%" 
                            stroke="#00E08F" strokeWidth="1.5" strokeOpacity="0.5"
                            strokeDasharray="4 4"
                            initial={{ strokeDashoffset: 0 }}
                            animate={{ strokeDashoffset: -20 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />

                        {/* Brackets */}
                        <motion.path 
                            d="M 85% 50% L 85% 30% L 100% 30%" 
                            fill="none" stroke="#00E08F" strokeWidth="1.5" strokeOpacity="0.3"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                        />
                        <motion.path 
                            d="M 85% 50% L 85% 70% L 100% 70%" 
                            fill="none" stroke="#00E08F" strokeWidth="1.5" strokeOpacity="0.3"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                        />
                    </svg>

                    {/* Central Scanner Node */}
                    <div className="relative z-20 flex items-center justify-center">
                         <motion.div 
                             animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                             transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                             className="absolute w-full h-full rounded-full border border-neon/30"
                        />
                         <motion.div 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", delay: 0.3 }}
                            className="w-12 h-12 lg:w-16 lg:h-16 bg-white dark:bg-[#050505] rounded-full border border-neon/50 flex items-center justify-center shadow-[0_0_30px_rgba(0,224,143,0.15)] relative z-20 transition-colors duration-300"
                        >
                             <ScanLine className="w-5 h-5 lg:w-6 lg:h-6 text-neon" />
                             <motion.div 
                                animate={{ rotate: 360 }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full border-t border-r border-neon opacity-60"
                             />
                        </motion.div>
                    </div>
                </div>

                {/* 3. Results Column */}
                <div className="flex flex-col gap-8 md:pl-8 relative z-10 items-center md:items-start">
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2, type: 'spring' }}
                        className="flex items-center gap-4 bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-[#222] px-6 py-4 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-lg w-auto min-w-[160px] hover:border-neon/50 transition-colors group"
                    >
                        <div className="w-8 h-8 rounded-full bg-neon/10 flex items-center justify-center group-hover:bg-neon/20 transition-colors">
                            <Check className="w-4 h-4 text-neon" />
                        </div>
                        <span className="text-zinc-800 dark:text-white font-mono text-sm tracking-wider font-bold transition-colors">PASSED</span>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.5, type: 'spring' }}
                        className="flex items-center gap-4 bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-[#222] px-6 py-4 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-lg w-auto min-w-[160px] hover:border-neon/50 transition-colors group"
                    >
                        <div className="w-8 h-8 rounded-full bg-neon/10 flex items-center justify-center group-hover:bg-neon/20 transition-colors">
                            <Lock className="w-4 h-4 text-neon" />
                        </div>
                        <span className="text-zinc-800 dark:text-white font-mono text-sm tracking-wider font-bold transition-colors">SECURED</span>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

// --- Component: Hero Section ---

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden transition-colors duration-300">
            {/* Vignette - Smooth blend into #F2F4F6 */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#F2F4F6_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)] pointer-events-none opacity-90" />
            
            <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Left Content */}
                <div className="space-y-10 text-center lg:text-left z-20">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/5 dark:border-surface-3 bg-white/50 dark:bg-white/5 backdrop-blur text-slate-500 dark:text-text-muted text-[11px] font-mono tracking-wider uppercase transition-colors shadow-sm"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
                        Escrow Secured Marketplace
                    </motion.div>

                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl lg:text-7xl font-normal tracking-tight text-slate-900 dark:text-white leading-[1.1] transition-colors"
                    >
                        Pre-owned tech, <br />
                        <span className="font-medium text-slate-900 dark:text-white">verified</span> by experts.
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-600 dark:text-text-muted max-w-lg mx-auto lg:mx-0 leading-relaxed font-light transition-colors"
                    >
                        The safest way to buy and sell electronics. We inspect every item, hold payments in escrow, and guarantee authenticity.
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                    >
                        <button className="px-8 py-3 bg-neon hover:bg-neon/90 text-[#050505] font-semibold rounded-full transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(0,224,143,0.2)]">
                            Browse Marketplace
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="px-8 py-3 bg-white dark:bg-transparent border border-gray-200 dark:border-surface-3 hover:border-neon dark:hover:border-white text-slate-900 dark:text-white font-medium rounded-full transition-all shadow-sm dark:shadow-none">
                            Start Selling
                        </button>
                    </motion.div>

                    {/* Stats */}
                    <div className="pt-8 flex items-center justify-center lg:justify-start gap-12 border-t border-gray-200 dark:border-surface-3/30 transition-colors">
                        {[
                            { label: "Verified", value: "iPhone 14 Pro" },
                            { label: "In Escrow", value: "₹1.2L" },
                            { label: "Inspected", value: "Sony A7IV" }
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="w-3 h-3 text-neon" />
                                    <span className="text-[10px] text-slate-500 dark:text-text-muted uppercase tracking-widest transition-colors">{stat.label}</span>
                                </div>
                                <span className="text-sm font-mono text-slate-900 dark:text-white transition-colors">{stat.value}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Visual */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="hidden lg:block w-full"
                >
                    <VerificationFlow />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;