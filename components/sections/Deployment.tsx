"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { Building2, AppWindow } from "lucide-react";

export function Deployment() {
    return (
        <section className="py-24 bg-brand-dark/50 border-b border-white/5">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
                        Built for How Enterprises Actually Ship Software
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Internal Automation */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-brand-card p-8 rounded-xl border border-white/10 shadow-sm hover:border-brand-blue/30 transition-colors"
                    >
                        <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-brand-blue mb-6">
                            <Building2 className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Internal Automation</h3>
                        <p className="text-slate-400 leading-relaxed">
                            Automate internal workflows across finance, operations, support, compliance, and client management.
                        </p>
                    </motion.div>

                    {/* OEM */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-brand-card p-8 rounded-xl border border-white/10 shadow-sm hover:border-brand-purple/30 transition-colors"
                    >
                        <div className="w-12 h-12 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
                            <AppWindow className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">OEM & Embedded AI</h3>
                        <p className="text-slate-400 leading-relaxed">
                            Embed Agent Dynamo into enterprise software to deliver AI-native capabilities without rebuilding your stack.
                        </p>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
