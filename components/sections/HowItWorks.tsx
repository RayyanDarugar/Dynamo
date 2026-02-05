"use client";

import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { motion } from "framer-motion";
import { Database, BrainCircuit, Rocket } from "lucide-react";

const steps = [
    {
        icon: Database,
        title: "Connect Your Knowledge",
        description: "Securely ingest data from your enterprise sources—internal docs, databases, or APIs—with one click.",
    },
    {
        icon: BrainCircuit,
        title: "Define Logic Naturally",
        description: "Describe what you want your agent to do in plain English. Dynamo's engine translates intent into deterministic workflows.",
    },
    {
        icon: Rocket,
        title: "Deploy with Confidence",
        description: "Ship to production instantly with built-in evaluation, versioning, and enterprise-grade security tailored for scale.",
    },
];

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 bg-brand-dark border-b border-white/5">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
                        From Idea to Agent in <GradientText>Minutes</GradientText>
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-slate-400">
                        Skip the boilerplate. Agent Dynamo abstracts the complexity of AI orchestration so you can focus on value.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connector Line (Desktop only) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-white/10 -z-10" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative flex flex-col items-center text-center bg-brand-card p-6 rounded-2xl shadow-lg border border-white/10 md:bg-transparent md:border-none md:shadow-none"
                        >
                            <div className="flex items-center justify-center w-24 h-24 rounded-full bg-brand-card border border-white/10 shadow-xl mb-6 z-10">
                                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-brand-blue/10 text-brand-blue">
                                    <step.icon className="w-10 h-10" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                            <p className="text-slate-400 leading-relaxed">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
