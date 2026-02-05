"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";

export function ProductDemo() {
    return (
        <section className="py-24 bg-brand-dark border-b border-white/5">
            <Container>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white">See It In Action</h2>
                </div>

                {/* Realistic Product UI Placeholder */}
                <div className="relative w-full aspect-video bg-brand-card rounded-xl border border-white/10 shadow-2xl overflow-hidden group ring-1 ring-white/10">

                    {/* Toolbar */}
                    <div className="absolute top-0 left-0 right-0 h-10 bg-brand-card border-b border-white/5 flex items-center px-4 justify-between">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                        </div>
                        <div className="h-5 w-64 bg-white/5 rounded mx-auto" />
                        <div className="w-20 h-5 bg-white/5 rounded" />
                    </div>

                    {/* Sidebar */}
                    <div className="absolute top-10 left-0 bottom-0 w-64 bg-brand-card border-r border-white/5 p-4 space-y-4 hidden md:block">
                        <div className="h-8 w-full bg-white/5 rounded" />
                        <div className="space-y-2">
                            <div className="h-4 w-3/4 bg-white/5 rounded" />
                            <div className="h-4 w-1/2 bg-white/5 rounded" />
                            <div className="h-4 w-5/6 bg-white/5 rounded" />
                        </div>
                    </div>

                    {/* Main Content Area - Animated Terminal */}
                    <div className="absolute top-10 left-0 md:left-64 right-0 bottom-0 bg-brand-dark flex flex-col font-mono text-sm p-6 overflow-hidden">
                        <div className="flex-1 space-y-2">
                            <div className="text-slate-500">$ agent run deploy-pipeline --env=prod</div>
                            <div className="text-blue-400">
                                <span className="w-2 h-2 inline-block bg-blue-400 rounded-full mr-2 animate-pulse" />
                                Initializing Agent Dynamo runtime v2.1...
                            </div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 1 }}
                                className="text-slate-400 pl-4"
                            >
                                → Loading context from Knowledge Forge...
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 2 }}
                                className="text-slate-400 pl-4"
                            >
                                → Verifying security policies (32 checks passed)
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 3 }}
                                className="text-green-400 pl-4"
                            >
                                ✓ Pipeline deployed successfully in 420ms
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 4 }}
                                className="text-slate-500 mt-4"
                            >
                                $ <span className="animate-pulse inline-block w-2 h-4 bg-slate-500 align-middle" />
                            </motion.div>
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
}
