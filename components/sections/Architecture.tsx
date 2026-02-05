"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { ScrollReveal, revealChildVariants } from "@/components/ui/ScrollReveal";
import { Database, Zap, Bot, Box } from "lucide-react";

const forges = [
    {
        title: "Knowledge Forge",
        description: "Bring enterprise knowledge — documents, wikis, repositories — into AI-ready form for search, RAG, and agents.",
        icon: Database,
        color: "blue"
    },
    {
        title: "Resource Forge",
        description: "Wrap APIs, ERPs, databases, and internal systems with semantics, context, and testable actions.",
        icon: Box,
        color: "cyan"
    },
    {
        title: "Reason Forge",
        description: "Author explainable, repeatable agentic systems using plain language — no deep AI expertise required.",
        icon: Bot,
        color: "indigo"
    },
    {
        title: "Action Forge",
        description: "Secure, scalable runtime for executing agents with built-in compliance, monitoring, and failure recovery.",
        icon: Zap,
        color: "purple"
    }
];

export function Architecture() {
    return (
        <section className="py-24 bg-brand-dark/50 border-b border-white/5">
            <Container>
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">Agent Dynamo Platform Architecture</h2>
                    <p className="text-slate-400 max-w-2xl">A unified infrastructure for intelligent automation.</p>
                </div>

                <ScrollReveal staggerChildren={0.1} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {forges.map((forge, index) => (
                        <motion.div
                            key={index}
                            variants={revealChildVariants}
                            className="bg-brand-card/30 p-6 rounded-xl border border-white/10 shadow-sm flex flex-col h-full hover:shadow-lg hover:bg-brand-card/50 transition-all relative overflow-hidden group"
                        >
                            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue to-brand-cyan opacity-0 group-hover:opacity-100 transition-opacity`} />

                            <div className="mb-6 w-12 h-12 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 group-hover:text-brand-blue transition-colors">
                                <forge.icon className="w-6 h-6" />
                            </div>

                            <h3 className="text-lg font-bold text-white mb-3">{forge.title}</h3>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                {forge.description}
                            </p>
                        </motion.div>
                    ))}
                </ScrollReveal>

                {/* Simple Block Diagram Visualization */}
                <div className="mt-16 pt-8 border-t border-white/5 hidden lg:block">
                    <div className="flex justify-center items-center gap-6 text-xs font-mono text-slate-500">

                        {/* Inputs */}
                        <div className="flex flex-col gap-3">
                            <div className="px-5 py-3 border border-white/10 rounded-lg bg-brand-card/50 text-slate-300 shadow-sm">
                                Data Sources
                            </div>
                            <div className="px-5 py-3 border border-white/10 rounded-lg bg-brand-card/50 text-slate-300 shadow-sm">
                                APIs & ERPs
                            </div>
                        </div>

                        {/* Arrow */}
                        <div className="text-brand-cyan/50 tracking-widest">→ INGEST →</div>

                        {/* Platform */}
                        <div className="p-6 border border-brand-blue/30 bg-brand-blue/5 rounded-xl text-brand-blue font-bold shadow-[0_0_30px_rgba(59,130,246,0.1)] ring-1 ring-brand-blue/20">
                            Agent Dynamo Platform
                        </div>

                        {/* Arrow */}
                        <div className="text-brand-cyan/50 tracking-widest">→ EXECUTE →</div>

                        {/* Output */}
                        <div className="p-6 border border-green-500/20 bg-green-500/5 rounded-xl text-green-400 font-bold shadow-[0_0_20px_rgba(34,197,94,0.1)] ring-1 ring-green-500/20">
                            Business Value
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
