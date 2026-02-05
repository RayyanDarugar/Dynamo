"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Terminal, Cpu, Network } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 0.9], [1, 1, 0]);

    return (
        <section ref={ref} className="relative min-h-[90vh] flex items-center pt-32 pb-24 overflow-hidden">

            {/* Dynamic Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-brand-dark" />
                <div className="absolute inset-0 tech-grid-bg opacity-30" />
                {/* Animated Gradient Orbs */}
                <motion.div
                    style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-20%] left-[20%] w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[100px]"
                />
                <motion.div
                    style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-brand-purple/20 rounded-full blur-[120px]"
                />
            </div>

            <Container className="relative z-10 w-full">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">

                    {/* Pill Label */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-cyan mb-8 backdrop-blur-sm"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
                        </span>
                        AGENT DYNAMO v2.0 LIVE
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight"
                    >
                        Enterprise AI Agents. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-purple">
                            Built for Scale.
                        </span>
                    </motion.h1>

                    {/* Subhead */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed"
                    >
                        The execution layer between AI models and enterprise systems.
                        Reliable, observable, and strictly governed.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto"
                    >
                        <Button size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-white shadow-lg shadow-brand-blue/20 h-12 px-8 text-base">
                            Start Building <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="lg" className="border-white/10 text-white hover:bg-white/5 h-12 px-8 text-base">
                            <Play className="mr-2 w-4 h-4" /> Watch Demo
                        </Button>
                    </motion.div>
                </div>

                {/* Hero Visual: The "System" */}
                <motion.div
                    style={{ y, opacity }}
                    className="relative w-full max-w-5xl mx-auto"
                >
                    <div className="relative aspect-[16/9] bg-brand-card border border-white/10 rounded-xl overflow-hidden shadow-2xl shadow-brand-blue/10 ring-1 ring-white/10">
                        {/* Interface Header */}
                        <div className="h-10 border-b border-white/5 bg-white/[0.02] flex items-center px-4 gap-4">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                            </div>
                            <div className="h-full flex items-center px-4 text-xs font-mono text-slate-500 border-x border-white/5 bg-white/[0.02]">
                                pipeline_v3.ts
                            </div>
                            <div className="ml-auto flex items-center gap-2 text-xs text-brand-cyan">
                                <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
                                Running
                            </div>
                        </div>

                        {/* Interface Body (Abstract Flow) */}
                        <div className="p-8 h-full relative">
                            {/* Animated Nodes */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative w-full max-w-2xl h-64">

                                    {/* Center Node */}
                                    <motion.div
                                        animate={{ boxShadow: ["0 0 0 0 rgba(59, 130, 246, 0)", "0 0 20px 5px rgba(59, 130, 246, 0.3)", "0 0 0 0 rgba(59, 130, 246, 0)"] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-brand-card border border-brand-blue rounded-xl flex items-center justify-center z-10"
                                    >
                                        <Cpu className="w-10 h-10 text-brand-blue" />
                                    </motion.div>

                                    {/* Connecting Lines */}
                                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                                        <motion.path
                                            d="M 100,128 L 300,128"
                                            stroke="url(#grad1)"
                                            strokeWidth="2"
                                            fill="none"
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            animate={{ pathLength: 1, opacity: 0.5 }}
                                            transition={{ duration: 1.5, delay: 0.5 }}
                                        />
                                        <motion.path
                                            d="M 500,128 L 700,128"
                                            stroke="url(#grad1)"
                                            strokeWidth="2"
                                            fill="none"
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            animate={{ pathLength: 1, opacity: 0.5 }}
                                            transition={{ duration: 1.5, delay: 1 }}
                                        />
                                        <defs>
                                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 0 }} />
                                                <stop offset="50%" style={{ stopColor: '#22D3EE', stopOpacity: 1 }} />
                                                <stop offset="100%" style={{ stopColor: '#3B82F6', stopOpacity: 0 }} />
                                            </linearGradient>
                                        </defs>
                                    </svg>

                                    {/* Floating Particles */}
                                    <motion.div
                                        animate={{ x: [0, 200], opacity: [0, 1, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                        className="absolute top-1/2 left-[100px] w-2 h-2 bg-brand-cyan rounded-full shadow-[0_0_10px_var(--color-brand-cyan)]"
                                    />

                                    <motion.div
                                        animate={{ x: [0, 200], opacity: [0, 1, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
                                        className="absolute top-1/2 left-[500px] w-2 h-2 bg-brand-purple rounded-full shadow-[0_0_10px_var(--color-brand-purple)]"
                                    />


                                    {/* Left Node */}
                                    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-16 h-16 bg-brand-card border border-white/10 rounded-lg flex items-center justify-center">
                                        <Terminal className="w-6 h-6 text-slate-400" />
                                    </div>

                                    {/* Right Node */}
                                    <div className="absolute top-1/2 right-0 -translate-y-1/2 w-16 h-16 bg-brand-card border border-white/10 rounded-lg flex items-center justify-center">
                                        <Network className="w-6 h-6 text-slate-400" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Reflection under the hero image */}
                    <div className="absolute -bottom-10 left-0 right-0 h-40 bg-gradient-to-t from-brand-dark to-transparent z-20" />
                </motion.div>
            </Container>
        </section>
    );
}
