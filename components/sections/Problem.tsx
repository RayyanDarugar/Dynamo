"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { X, MessageSquare, AlertTriangle, GitPullRequest, Code2, Layers, Database, Server } from "lucide-react";

export function Problem() {
    return (
        <section className="py-24 bg-brand-dark border-b border-white/5">
            <Container>
                <div className="flex flex-col md:flex-row gap-16">
                    {/* Content */}
                    <div className="flex-1">
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold tracking-tight text-white mb-6"
                        >
                            Enterprise AI Is Failing at Scale
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-slate-400 mb-8 leading-relaxed"
                        >
                            Despite massive investment, enterprise AI adoption remains low and unreliable. Most solutions focus on chat interfaces and demos, while real enterprise work happens across systems, workflows, and exceptions.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-4"
                        >
                            {[
                                { icon: MessageSquare, text: "Chat is treated as the interface, instead of automation" },
                                { icon: AlertTriangle, text: "Agents are built for happy paths, not real complexity" },
                                { icon: GitPullRequest, text: "Development cycles are slow, expensive, and brittle" },
                                { icon: Code2, text: "The people closest to the work can’t build the solutions" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/5">
                                    <item.icon className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                                    <span className="text-slate-300 font-medium">{item.text}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Visual: The Gap Diagram */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className="relative w-full max-w-sm aspect-[4/5] md:aspect-auto md:h-full bg-brand-card/50 rounded-xl border border-white/10 p-8 flex flex-col justify-between items-center text-center">

                            {/* Top: Enterprise Systems */}
                            <div className="w-full p-4 bg-slate-800 rounded-lg border border-slate-700 shadow-sm text-white">
                                <div className="font-semibold mb-2">Enterprise Systems</div>
                                <div className="grid grid-cols-3 gap-2 opacity-50">
                                    <Layers className="w-6 h-6 mx-auto" />
                                    <Database className="w-6 h-6 mx-auto" />
                                    <Server className="w-6 h-6 mx-auto" />
                                </div>
                            </div>

                            {/* The Gap */}
                            <div className="flex-1 w-full flex flex-col items-center">
                                {/* Top Line */}
                                <div className="flex-1 w-px border-l-2 border-dashed border-red-500/30" />

                                {/* Bubble & Text */}
                                <div className="relative z-10 py-4 flex flex-col items-center justify-center">
                                    <div className="bg-red-500/10 text-red-400 px-4 py-2 rounded-full text-sm font-bold border border-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                                        The Execution Gap
                                    </div>
                                    <div className="mt-3 text-xs text-slate-500 font-medium bg-brand-dark/50 px-3 py-1 rounded-full border border-white/5">
                                        Where logic, auth, & reliability break
                                    </div>
                                </div>

                                {/* Bottom Line */}
                                <div className="flex-1 w-px border-l-2 border-dashed border-red-500/30" />
                            </div>

                            {/* Bottom: AI Models & SDKs */}
                            <div className="w-full p-4 bg-brand-card rounded-lg border border-white/10 shadow-sm">
                                <div className="font-semibold text-slate-200 mb-2">AI Models & SDKs</div>
                                <div className="flex justify-center gap-2">
                                    <div className="w-8 h-8 bg-blue-500/20 rounded-full border border-blue-500/50" />
                                    <div className="w-8 h-8 bg-green-500/20 rounded-full border border-green-500/50" />
                                    <div className="w-8 h-8 bg-purple-500/20 rounded-full border border-purple-500/50" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
