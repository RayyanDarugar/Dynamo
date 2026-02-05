"use client";

import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { motion } from "framer-motion";
import { ScrollReveal, revealChildVariants } from "@/components/ui/ScrollReveal";
import { Layers, ShieldCheck, Activity, Scale } from "lucide-react";

export function Solution() {
    return (
        <section className="py-24 bg-brand-dark border-b border-white/5 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/5 blur-3xl rounded-full translate-x-1/2" />

            <Container className="relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-brand-cyan font-semibold tracking-wider uppercase text-sm">Agent Dynamo</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mt-2 mb-6">
                            The Missing Layer for <GradientText>Enterprise AI</GradientText>
                        </h2>
                        <p className="text-lg text-slate-400 leading-relaxed">
                            Agent Dynamo is the unified infrastructure for building, composing, and running autonomous AI agents with enterprise-grade reliability. It sits between AI models and enterprise systems.
                        </p>
                    </motion.div>
                </div>

                <ScrollReveal staggerChildren={0.1} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { icon: Layers, title: "Multi-step reasoning", desc: "Chain of thought execution that handles complexity." },
                        { icon: ShieldCheck, title: "Secure execution", desc: "Sandboxed environments with strict policy controls." },
                        { icon: Activity, title: "Runtime management", desc: "Full observability, logging, and error handling." },
                        { icon: Scale, title: "Compliance & QA", desc: "Built-in auditing for every action taken." },
                    ].map((feature, i) => (
                        <motion.div
                            key={i}
                            variants={revealChildVariants}
                            className="p-6 rounded-xl bg-brand-card/50 border border-white/10 hover:border-brand-blue/50 transition-colors group"
                        >
                            <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-brand-blue group-hover:bg-brand-blue/10 transition-all mb-4">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                            <p className="text-sm text-slate-400">{feature.desc}</p>
                        </motion.div>
                    ))}
                </ScrollReveal>

                <div className="mt-16 text-center">
                    <span className="inline-block px-4 py-2 rounded-full bg-white/5 text-slate-400 font-medium text-sm border border-white/10">
                        Agents over chat. Execution over demos. Reliability over novelty.
                    </span>
                </div>
            </Container>
        </section>
    );
}
