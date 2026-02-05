"use client";

import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function Insight() {
    return (
        <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-blue/10 blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-brand-cyan/10 blur-3xl opacity-50" />

            <Container className="relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold tracking-tight mb-8 text-white"
                >
                    AI Should <GradientText className="from-brand-cyan to-white">Work for You</GradientText> — Not Talk to You
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-slate-400 max-w-3xl mx-auto mb-16 leading-relaxed"
                >
                    The most valuable AI operates autonomously, in the background, triggered by real business objects and events. Humans should only step in when exceptions occur.
                </motion.p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                    {[
                        "Autonomous agents, not chatbots",
                        "Composable capabilities, not monolithic apps",
                        "Reliability, observability, and governance by default",
                        "A way for non-technical teams to build safely"
                    ].map((text, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + i * 0.1 }}
                            className="p-6 rounded-lg bg-brand-card/50 border border-white/10 hover:bg-brand-card hover:border-brand-blue/30 transition-colors"
                        >
                            <CheckCircle2 className="w-8 h-8 text-brand-cyan mb-4" />
                            <p className="font-medium text-lg text-slate-200">{text}</p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
