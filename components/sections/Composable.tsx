"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { Workflow, Box, Share2 } from "lucide-react";

export function Composable() {
    return (
        <section className="py-24 bg-brand-dark border-b border-white/5">
            <Container>
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Content */}
                    <div className="flex-1 order-2 lg:order-1">
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold tracking-tight text-white mb-6"
                        >
                            Composable by Design
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-slate-400 mb-8 leading-relaxed"
                        >
                            Every agent you create becomes a reusable capability for other agents. Simple agents compose into workflows. Workflows compose into systems.
                        </motion.p>

                        <ul className="space-y-4">
                            {[
                                "Faster iteration",
                                "Safer experimentation",
                                "Long-term system evolution without rewrites"
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    className="flex items-center gap-3 text-slate-300"
                                >
                                    <div className="w-6 h-6 rounded-full bg-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                                        <Share2 className="w-3 h-3" />
                                    </div>
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Visualization: Nested Blocks */}
                    <div className="flex-1 order-1 lg:order-2 flex justify-center">
                        <div className="relative w-full max-w-md aspect-square bg-brand-card/30 rounded-xl border border-white/10 p-8 shadow-inner">
                            <div className="absolute inset-0 flex items-center justify-center">

                                {/* Outer Block (System) */}
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className="w-80 h-80 bg-brand-card border border-white/10 rounded-xl shadow-lg p-4 relative"
                                >
                                    <div className="text-xs font-mono text-slate-500 mb-2 flex items-center gap-2">
                                        <Box className="w-3 h-3" /> System: Order Processing
                                    </div>

                                    {/* Middle Block (Workflow) */}
                                    <motion.div
                                        initial={{ scale: 0.9, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        className="absolute top-10 left-4 right-4 bottom-4 bg-brand-dark/50 border border-white/5 rounded-lg p-4"
                                    >
                                        <div className="text-xs font-mono text-slate-500 mb-2 flex items-center gap-2">
                                            <Workflow className="w-3 h-3" /> Workflow: Validate & Fraud Check
                                        </div>

                                        {/* Inner Blocks (Agents) */}
                                        <div className="grid grid-cols-2 gap-2 mt-4">
                                            <motion.div
                                                initial={{ y: 10, opacity: 0 }}
                                                whileInView={{ y: 0, opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: 0.4 }}
                                                className="h-24 bg-brand-card border border-brand-blue/30 rounded flex items-center justify-center text-xs font-medium text-brand-blue"
                                            >
                                                Fraud Agent
                                            </motion.div>
                                            <motion.div
                                                initial={{ y: 10, opacity: 0 }}
                                                whileInView={{ y: 0, opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: 0.5 }}
                                                className="h-24 bg-brand-card border border-brand-cyan/30 rounded flex items-center justify-center text-xs font-medium text-brand-cyan"
                                            >
                                                Identity Agent
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                </motion.div>

                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
