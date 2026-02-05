"use client";

import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { motion } from "framer-motion";
import { MessageSquare, Sparkles, Workflow, Database } from "lucide-react";

export function ProductBridge() {
    return (
        <section className="py-24 bg-slate-900 overflow-hidden relative">
            {/* Background Gradients */}
            <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-slate-900 to-transparent z-10" />
            <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-slate-900 to-transparent z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/10 rounded-full blur-3xl opacity-50" />

            <Container className="relative z-20">
                <div className="text-center mb-16">
                    <span className="text-brand-light font-medium text-sm tracking-wider uppercase mb-2 block">The Platform</span>
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
                        Built for <GradientText className="from-brand-light to-white">Power Users</GradientText>
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-slate-400">
                        A unified workspace for prompt engineering, workflow orchestration, and deployment.
                    </p>
                </div>

                {/* Abstract Interface */}
                <div className="relative mx-auto max-w-5xl bg-slate-800/50 rounded-xl border border-white/10 shadow-2xl overflow-hidden backdrop-blur-sm">
                    {/* Window Controls */}
                    <div className="h-12 border-b border-white/10 flex items-center px-4 bg-slate-900/50">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-slate-600/50" />
                            <div className="w-3 h-3 rounded-full bg-slate-600/50" />
                            <div className="w-3 h-3 rounded-full bg-slate-600/50" />
                        </div>
                    </div>

                    {/* Split View */}
                    <div className="grid grid-cols-1 md:grid-cols-2 h-[500px]">
                        {/* Left: Chat/Input */}
                        <div className="p-6 border-r border-white/10 flex flex-col">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-8 h-8 rounded-lg bg-brand-blue/20 flex items-center justify-center text-brand-blue">
                                    <MessageSquare className="w-4 h-4" />
                                </div>
                                <h3 className="text-white font-medium">Agent Definition</h3>
                            </div>

                            <div className="flex-1 space-y-4">
                                <div className="bg-slate-700/30 p-4 rounded-lg rounded-tl-none border border-white/5">
                                    <p className="text-slate-300 text-sm">Create a customer support agent that has access to our refund policy database and can process returns up to $50 automatically.</p>
                                </div>
                                <div className="bg-brand-blue/10 p-4 rounded-lg rounded-tr-none border border-brand-blue/20 ml-auto max-w-[90%]">
                                    <div className="flex items-center gap-2 text-brand-light text-sm mb-2">
                                        <Sparkles className="w-3 h-3" />
                                        <span>Generating Workflow...</span>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="h-2 w-full bg-brand-blue/20 rounded animate-pulse" />
                                        <div className="h-2 w-3/4 bg-brand-blue/20 rounded animate-pulse" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Workflow Visualization */}
                        <div className="p-6 bg-slate-900/30 relative">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
                                    <Workflow className="w-4 h-4" />
                                </div>
                                <h3 className="text-white font-medium">Live Execution Plan</h3>
                            </div>

                            <div className="relative h-full w-full">
                                {/* Nodes */}
                                <motion.div
                                    className="absolute top-10 left-1/2 -translate-x-1/2 bg-slate-800 border border-white/20 p-3 rounded-lg text-xs text-white shadow-lg"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    Input Trigger
                                </motion.div>
                                <div className="absolute top-20 left-1/2 w-px h-8 bg-white/20" />

                                <motion.div
                                    className="absolute top-28 left-1/2 -translate-x-1/2 bg-blue-500/20 border border-blue-500/50 p-3 rounded-lg text-xs text-blue-100 shadow-lg flex items-center gap-2"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <Database className="w-3 h-3" />
                                    Query: Refund Policy
                                </motion.div>
                                <div className="absolute top-40 left-1/2 w-px h-8 bg-white/20" />

                                <motion.div
                                    className="absolute top-48 left-1/2 -translate-x-1/2 grid grid-cols-2 gap-4 w-48"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    <div className="bg-slate-800 border border-white/10 p-2 rounded text-[10px] text-center text-slate-400">
                                        Condition: &lt; $50
                                    </div>
                                    <div className="bg-slate-800 border border-white/10 p-2 rounded text-[10px] text-center text-slate-400">
                                        Condition: &gt; $50
                                    </div>
                                </motion.div>

                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
